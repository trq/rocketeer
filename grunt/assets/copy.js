module.exports = {
	dist: {
		files: [
			{
				expand : true,
				src    : ['**'],
				cwd    : '<%= components %>/bootstrap/fonts',
				dest   : '<%= builds %>/fonts/'
			},
			{
				expand : true,
				src    : ['**'],
				cwd    : '<%= paths.original.img %>',
				dest   : '<%= paths.compiled.img %>'
			}
		]
	}
};