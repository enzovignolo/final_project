import nodemailer from 'nodemailer';
import { MAIL } from '../../config';
console.log(MAIL);
const gmailTransport = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: MAIL.GMAIL_USER,
		pass: MAIL.GMAIL_PASS,
	},
});

export default { gmailTransport };
