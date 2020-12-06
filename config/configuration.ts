export default () => ({
	urls: {},
	port: parseInt(process.env.PORT, 10) || 3000,
	forFront: {
		Applicationtype: process.env.Applicationtype
	},
	securities: {}
});
