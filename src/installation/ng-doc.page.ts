import {NgDocPage} from '@ng-doc/core';
import { LuiButtonComponent } from '../shared/lui-button/lui-button.component';
import { NgDocTagComponent } from '@ng-doc/ui-kit';

const InstallationPage: NgDocPage = {
	title: `Installation`,
	mdFile: './index.md',
	data: 'info',
	demos: { LuiButtonComponent },
	playgrounds: {
		TagPlayground: {
		  target: LuiButtonComponent,
		  template: `<ng-doc-selector>Findme!</ng-doc-selector>`,
		},
	  },	
};

export default InstallationPage;
