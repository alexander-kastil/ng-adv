import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MarkdownComponent } from 'ngx-markdown';
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';

@Component({
    selector: 'app-markdown-renderer',
    templateUrl: './markdown-renderer.component.html',
    styleUrls: ['./markdown-renderer.component.scss'],
    imports: [
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MarkdownComponent,
    ]
})
export class MarkdownRendererComponent {
  @Input() md: string = '';
  panelOpenState = true;

  getMarkdown(): string {
    return `${environment.markdownPath}${this.md}.md`;
  }
}
