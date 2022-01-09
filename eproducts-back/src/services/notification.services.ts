import { Transporter } from 'nodemailer';
export default ({ gmailTransport }: { gmailTransport: Transporter }) => ({
	async sendGmailEmail({
		subject = '',
		bodyText = '',
		htmlText = '',
		receiver,
	}) {
		try {
			await gmailTransport.sendMail({
				from: 'administration@product.com',
				to: receiver,
				subject: subject,
				text: bodyText,
				html: htmlText,
			});
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
});
