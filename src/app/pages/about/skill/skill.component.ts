import { Component, Input } from '@angular/core';
import { Skill } from '../../../../core/models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @Input() skill!: Skill;
}
