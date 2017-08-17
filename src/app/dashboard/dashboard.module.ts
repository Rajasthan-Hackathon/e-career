import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoyProfileComponent } from './coy-profile/coy-profile.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { CoyDashComponent } from './coy-dash/coy-dash.component';
import { UserSkillSuggestionComponent } from './user-skill-suggestion/user-skill-suggestion.component';
import { CoyPostJobComponent } from './coy-post-job/coy-post-job.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserProfileComponent, CoyProfileComponent, UserDashComponent, CoyDashComponent, UserSkillSuggestionComponent, CoyPostJobComponent]
})
export class DashboardModule { }
