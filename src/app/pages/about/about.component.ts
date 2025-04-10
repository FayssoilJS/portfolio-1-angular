import { Component } from '@angular/core';
import { OWNER } from '../../db_local/db';
import { Skill } from '../../../core/models/skill.model';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills: Skill[] = OWNER.skills
}
