import {NgDocApi} from '@ng-doc/core';

const Api: NgDocApi = {
	title: 'API',
	scopes: [
		{
			name: 'my-library-name',
			route: 'my-library',
			include: 'src/shared/**/*.ts',
		  },		
	],
};

export default Api;
