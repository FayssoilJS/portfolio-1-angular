import { Component } from '@angular/core';
import { FormContact } from '../../../core/models/form-contact.model';
import  emailjs  from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData: FormContact = {}

  isFullNameValid: boolean = false;
  isEmailValid: boolean = false;
  isSubjectValid: boolean = false;
  isMessageValid: boolean = false;

  errorNameMessage: string = "";
  errorEmailMessage: string = "";
  errorSubjectMessage: string = "";
  errorMessageMessage: string = "";

  isSuccessModalVisible: boolean = false;

  isLoading: boolean = false;
  isError: boolean = false;

  public onValidName(): void {

    const [valid, message] = this.validateField(
      this.formData?.full_name ||"",
      /^[a-zA-Z\s]{4,20}$/,
      "Minimum 4 caractères, maximum 20 caractères."
    );

    this.isFullNameValid = valid;
    this.errorNameMessage = message;

  }

  public onValidEmail(): void {

    const [valid, message] = this.validateField(
      this.formData?.replay_to || "",
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Veuillez saisir un email valide: exemple@domaine.com"
    );

    this.isEmailValid = valid;
    this.errorEmailMessage = message;

  }

  public onValidSubject(): void {

    const [valid, message] = this.validateField(
      this.formData?.subject || "",
      /^[a-zA-Z0-9._%+-\s]{4,}$/,
      "Minimum 4 caractères."
    )

    this.isSubjectValid = valid;
    this.errorSubjectMessage = message;

  }

  public onValidMessage(): void {

    const [valid, message] = this.validateField(
      this.formData?.message || "",
      /[a-zA-Z0-9._%+-\s]{10,}$/,
      "Minimum 10 caractères."
    );

    this.isMessageValid = valid;
    this.errorMessageMessage = message;

  }

  public isFormDataValid(): boolean {
    return this.isFullNameValid && this.isEmailValid && this.isSubjectValid && this.isMessageValid;
  }

  private validateField(value: string, regex: RegExp, minMessage: string): [boolean, string] {

    if(!value) {
      return [false, "Ce champ est obligatoire !"];
    }

    if(!regex.test(value)) {
      return [false, minMessage];
    }

    return [true,""];
  }

  public onSendEmail(): void {

    this.isLoading = true;

    if(this.isFormDataValid()) {

      emailjs.send(
        "service_ndro5pe",
        "template_y7y0xth",
        {
        full_name: this.formData.full_name,
        replay_to: this.formData.replay_to,
        message: this.formData.message,
        subject: this.formData.subject,
        },
        //"cHI83LJHXZddtgr7N"
        "cHI83LJHXZddtgrfake"
      ).then((res) => {

        this.isLoading = false;

        this.isSuccessModalVisible = true;
      })
      .catch((error) => {

        this.isLoading = false;
        this.isError = true;

        setTimeout(() => {
          this.isError = false;
        }, 1000)

        console.error("#error:",error);
      })
      .finally(() => {
        //nettoyage des champs.
        this.formData = {};
        }
      );

    }
  }

  public closeSuccessModal(): void {
    this.isSuccessModalVisible = false;
  }

}
