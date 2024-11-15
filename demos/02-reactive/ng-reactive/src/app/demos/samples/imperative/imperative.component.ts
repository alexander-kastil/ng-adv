import { JsonPipe } from '@angular/common';
import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { Skill } from '../../skills/skills';
import { SkillsService } from '../../skills/skills.service';

@Component({
  selector: 'app-imperative',
  templateUrl: './imperative.component.html',
  styleUrls: ['./imperative.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
  ],
})
export class ImperativeComponent implements OnInit {
  @Input() title = 'ImperativeProgramming';
  @Input() showMD = true;
  destroy = inject(DestroyRef)

  filter$ = new FormControl('', { nonNullable: true });
  service = inject(SkillsService);
  //local vars for values taken out of the stream
  skills: Skill[] = [];
  view: Skill[] = [];

  ngOnInit(): void {
    this.service
      .getSkills()
      //takeUntilDestroyed will unsubscribe from the stream when the destroy$ Subject emits a value
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((skills) => {
        this.skills = skills;
        this.view = skills;
      });

    this.filter$.valueChanges
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((val) => {
        this.view =
          val == ''
            ? this.skills
            : this.skills.filter((skill) => skill.name.includes(val));
      });
  }

}
