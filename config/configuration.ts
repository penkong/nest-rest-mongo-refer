export default () => ({
	urls: {
		emoji: process.env.EMOJI_URL || 'like : http://www.emojipurian.com.nejad'
	},
	port: parseInt(process.env.PORT, 10) || 3000,
	forFront: {
		Applicationtype: process.env.Applicationtype || 'Desktop for example'
	},
	securities: {
		jwtSecret:
			process.env.JWT_SECRET || 'provide them by cloud provider or k8s like env'
	}
})
