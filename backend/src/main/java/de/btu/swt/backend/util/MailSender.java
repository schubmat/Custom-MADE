package de.btu.swt.backend.util;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.InputStreamSource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.Properties;

public class MailSender {

    private static final String BTU_LOGIN_NAME = null;
    private static final String BTU_LOGIN_PASSWORD = null;
    /* has to be a fully qualified address */
    private static final String MAIL_FROM = "mdse@b-tu.de";

    private static final MailSender INSTANCE = new MailSender();

    public static MailSender getInstance() {
        return INSTANCE;
    }


    private final JavaMailSenderImpl mailSender;

    private MailSender() {
        // if (BTU_LOGIN_NAME == null) {
        //     mailSender = null;
        //     return;
        // }
        mailSender = new JavaMailSenderImpl();
        mailSender.setHost("mailout.b-tu.de");
        // mailSender.setPort(587);
        mailSender.setPort(25);

        // mailSender.setUsername(BTU_LOGIN_NAME);
        // mailSender.setPassword(BTU_LOGIN_PASSWORD);

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "false");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");
    }

    public void sendMail(String to, String subject, String text) {
        if (mailSender == null)
            return;
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        message.setFrom(MAIL_FROM);
        mailSender.send(message);
    }

    public void sendMail(String to, String subject, String text, String fileName, InputStreamSource inputStreamSource) {
        if (mailSender == null)
            return;
        MimeMessage message = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(text);
            helper.setFrom(MAIL_FROM);
            helper.addAttachment(fileName, inputStreamSource);

            mailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

    public void sendMail(String to, String subject, String text, File file) {
        sendMail(to, subject, text, file.getName(), new FileSystemResource(file));
    }

    public void sendMail(String to, String subject, String text, String fileName, String fileContent) {
        sendMail(to, subject, text, fileName, new ByteArrayResource(fileContent.getBytes()));
    }
}
