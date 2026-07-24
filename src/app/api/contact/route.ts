import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Check if environment variables are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email configuration missing in environment variables.");
      return NextResponse.json({ 
        success: false, 
        message: 'Server configuration error. Please contact support.' 
      }, { status: 500 });
    }

    // Configure the email transport using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format the email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <div style="background-color: #050811; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h2 style="color: #ffffff; margin: 0;">New Consultation Request</h2>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h3 style="color: #333; border-bottom: 2px solid #2563eb; padding-bottom: 5px;">Client Information</h3>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Location:</strong> ${data.city || 'N/A'}, ${data.country || 'N/A'}</p>
          <p><strong>Preferred Communication:</strong> <span style="background-color: #2563eb; color: white; padding: 3px 8px; border-radius: 4px; font-size: 12px;">${data.communication}</span></p>

          <h3 style="color: #333; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-top: 25px;">Meeting Schedule</h3>
          <p><strong>Date Selected:</strong> ${data.date} (Current Month)</p>
          <p><strong>Time Slot:</strong> ${data.time} (IST)</p>
          
          <h3 style="color: #333; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-top: 25px;">Project Details</h3>
          <p><strong>Project Type:</strong> ${data.projectType}</p>
          <p><strong>Industry:</strong> ${data.industry}</p>
          <p><strong>Budget:</strong> ${data.budget}</p>
          <p><strong>Timeline:</strong> ${data.timeline}</p>
          <p><strong>Current Stage:</strong> ${data.stage}</p>
          
          <h4 style="margin-bottom: 5px;">Description:</h4>
          <div style="background-color: #fff; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
            ${data.description.replace(/\n/g, '<br/>')}
          </div>
          
          <h4 style="margin-bottom: 5px;">Requested Features:</h4>
          <p>${data.features && data.features.length > 0 ? data.features.join(', ') : 'None specified'}</p>
        </div>
        
        <div style="text-align: center; padding: 15px; font-size: 12px; color: #777;">
          <p>You can reply directly to this email to contact the client.</p>
        </div>
      </div>
    `;

    // 1. Send the email to the ADMIN
    const info = await transporter.sendMail({
      from: `"TeamLite Notifications" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Send to the admin
      replyTo: data.email, // clicking "Reply" will reply to the client
      subject: `New Consultation Booked: ${data.firstName} ${data.lastName} - ${data.projectType}`,
      html: htmlContent,
    });

    // 2. Send an auto-reply confirmation to the CLIENT
    const clientAutoReplyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <div style="background-color: #050811; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h2 style="color: #ffffff; margin: 0;">Request Received - TeamLite</h2>
        </div>
        <div style="padding: 20px; background-color: #f9f9f9; text-align: left;">
          <p style="font-size: 16px; color: #333;">Hi ${data.firstName},</p>
          <p style="font-size: 16px; color: #333; line-height: 1.5;">
            Thank you for booking a consultation with us! Our team is currently reviewing your project requirements. 
          </p>
          <p style="font-size: 16px; color: #333; line-height: 1.5;">
            We will connect with you very shortly regarding your request for the <strong>${data.projectType}</strong> project.
          </p>
          <div style="background-color: #e5edff; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #c2d5ff;">
            <p style="margin: 0; color: #1e3a8a; font-weight: bold;">Your Selected Time:</p>
            <p style="margin: 5px 0 0 0; color: #1e40af;">Date: ${data.date}</p>
            <p style="margin: 5px 0 0 0; color: #1e40af;">Time: ${data.time} (IST)</p>
          </div>
          <p style="font-size: 16px; color: #333; line-height: 1.5;">
            Best Regards,<br/>
            <strong>TeamLite Solution Architects</strong>
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"TeamLite" <${process.env.EMAIL_USER}>`,
      to: data.email, // Send to the client
      subject: `We've received your request! - TeamLite`,
      html: clientAutoReplyHtml,
    });

    console.log("Messages sent successfully.");

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
    
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process request' 
    }, { status: 500 });
  }
}
