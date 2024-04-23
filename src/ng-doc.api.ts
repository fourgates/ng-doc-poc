import {NgDocApi} from '@ng-doc/core';

const Api: NgDocApi = {
	title: 'API',
	scopes: [
		{
			name: 'my-library-name',
			route: 'my-library',
			include: './src/shared/**/*.ts',
		  },		
	],
};

// notes to update docs
// 1. this file needs to be inside src
//	 but the include is relative to the root
// 
export default Api;
