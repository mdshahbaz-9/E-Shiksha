
exports.courseEnrollmentEmail = (courseName, name) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Course Registration Confirmation</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background-color: #f8fafc;
                padding: 20px;
                line-height: 1.6;
                color: #334155;
            }
            
            .email-container {
                max-width: 600px;
                margin: 0 auto;
                background: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                border: 1px solid #e2e8f0;
            }
            
            .header {
                background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
                padding: 40px 32px;
                text-align: center;
                position: relative;
            }
            
            .header::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #10b981);
            }
            
            .logo {
                max-width: 160px;
                height: auto;
                margin-bottom: 24px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
            
            .header-title {
                font-size: 24px;
                font-weight: 600;
                color: #ffffff;
                margin-bottom: 8px;
                letter-spacing: -0.025em;
            }
            
            .header-subtitle {
                font-size: 16px;
                color: #cbd5e0;
                font-weight: 400;
            }
            
            .content {
                padding: 40px 32px;
            }
            
            .greeting {
                font-size: 18px;
                font-weight: 500;
                color: #1e293b;
                margin-bottom: 24px;
            }
            
            .enrollment-details {
                background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                border: 1px solid #e2e8f0;
                border-radius: 12px;
                padding: 24px;
                margin: 24px 0;
                position: relative;
            }
            
            .enrollment-details::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #3b82f6, #8b5cf6);
                border-radius: 12px 12px 0 0;
            }
            
            .enrollment-header {
                display: flex;
                align-items: center;
                margin-bottom: 16px;
            }
            
            .enrollment-icon {
                width: 48px;
                height: 48px;
                background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 16px;
                color: white;
                font-size: 20px;
                font-weight: 600;
            }
            
            .enrollment-title {
                font-size: 16px;
                font-weight: 600;
                color: #1e293b;
                margin-bottom: 4px;
            }
            
            .enrollment-subtitle {
                font-size: 14px;
                color: #64748b;
            }
            
            .course-name {
                font-size: 20px;
                font-weight: 600;
                color: #1e293b;
                margin-bottom: 8px;
                line-height: 1.3;
            }
            
            .enrollment-status {
                display: inline-flex;
                align-items: center;
                background: #dcfce7;
                color: #166534;
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 14px;
                font-weight: 500;
                border: 1px solid #bbf7d0;
            }
            
            .status-dot {
                width: 8px;
                height: 8px;
                background: #22c55e;
                border-radius: 50%;
                margin-right: 8px;
            }
            
            .message-text {
                font-size: 16px;
                color: #475569;
                line-height: 1.7;
                margin-bottom: 32px;
            }
            
            .next-steps {
                background: #ffffff;
                border: 1px solid #e2e8f0;
                border-radius: 12px;
                padding: 24px;
                margin: 32px 0;
            }
            
            .next-steps-title {
                font-size: 18px;
                font-weight: 600;
                color: #1e293b;
                margin-bottom: 16px;
                display: flex;
                align-items: center;
            }
            
            .next-steps-icon {
                width: 24px;
                height: 24px;
                background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 12px;
                color: white;
                font-size: 12px;
                font-weight: 600;
            }
            
            .steps-list {
                list-style: none;
                padding: 0;
            }
            
            .steps-list li {
                display: flex;
                align-items: flex-start;
                margin-bottom: 12px;
                font-size: 15px;
                color: #475569;
            }
            
            .step-number {
                width: 24px;
                height: 24px;
                background: #f1f5f9;
                border: 2px solid #e2e8f0;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: 600;
                color: #64748b;
                margin-right: 12px;
                flex-shrink: 0;
                margin-top: 2px;
            }
            
            .cta-section {
                text-align: center;
                margin: 40px 0;
            }
            
            .cta-button {
                display: inline-flex;
                align-items: center;
                background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
                color: #ffffff;
                text-decoration: none;
                font-weight: 600;
                font-size: 16px;
                padding: 16px 32px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
                transition: all 0.2s ease;
                letter-spacing: -0.025em;
            }
            
            .cta-button:hover {
                transform: translateY(-1px);
                box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
            }
            
            .cta-icon {
                margin-left: 8px;
                font-size: 16px;
            }
            
            .support-section {
                background: #f8fafc;
                border: 1px solid #e2e8f0;
                border-radius: 12px;
                padding: 24px;
                margin: 32px 0;
                text-align: center;
            }
            
            .support-title {
                font-size: 16px;
                font-weight: 600;
                color: #1e293b;
                margin-bottom: 8px;
            }
            
            .support-text {
                font-size: 14px;
                color: #64748b;
                margin-bottom: 16px;
            }
            
            .support-contact {
                display: inline-flex;
                align-items: center;
                background: #ffffff;
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 12px 16px;
                text-decoration: none;
                color: #3b82f6;
                font-weight: 500;
                font-size: 14px;
                transition: all 0.2s ease;
            }
            
            .support-contact:hover {
                background: #f1f5f9;
                border-color: #3b82f6;
            }
            
            .support-contact-icon {
                margin-right: 8px;
                font-size: 16px;
            }
            
            .footer {
                background: #1e293b;
                padding: 32px;
                text-align: center;
            }
            
            .footer-logo {
                max-width: 120px;
                height: auto;
                margin-bottom: 16px;
                opacity: 0.8;
            }
            
            .footer-text {
                font-size: 14px;
                color: #94a3b8;
                line-height: 1.6;
                margin-bottom: 16px;
            }
            
            .footer-links {
                display: flex;
                justify-content: center;
                gap: 24px;
                margin-bottom: 16px;
            }
            
            .footer-link {
                color: #cbd5e0;
                text-decoration: none;
                font-size: 14px;
                font-weight: 500;
                transition: color 0.2s ease;
            }
            
            .footer-link:hover {
                color: #3b82f6;
            }
            
            .footer-copyright {
                font-size: 12px;
                color: #64748b;
                margin-top: 16px;
                padding-top: 16px;
                border-top: 1px solid #334155;
            }
            
            @media (max-width: 600px) {
                .email-container {
                    margin: 0;
                    border-radius: 0;
                }
                
                .header, .content, .footer {
                    padding-left: 20px;
                    padding-right: 20px;
                }
                
                .header {
                    padding-top: 32px;
                    padding-bottom: 32px;
                }
                
                .content {
                    padding-top: 32px;
                    padding-bottom: 32px;
                }
                
                .footer-links {
                    flex-direction: column;
                    gap: 12px;
                }
                
                .cta-button {
                    padding: 14px 24px;
                    font-size: 15px;
                }
            }
        </style>
    </head>
    
    <body>
        <div class="email-container">
            <div class="header">
                <a href="https://e-shiksha-v8yj.vercel.app">
                    <img class="logo" src="https://sdmntpreastus.oaiusercontent.com/files/00000000-7bc4-61f9-9eec-13ef82f38b87/raw?se=2025-07-04T19%3A35%3A17Z&sp=r&sv=2024-08-04&sr=b&scid=90f365a6-48a9-59b4-ac5c-bff9239b6d28&skoid=b0fd38cc-3d33-418f-920e-4798de4acdd1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-04T08%3A15%3A55Z&ske=2025-07-05T08%3A15%3A55Z&sks=b&skv=2024-08-04&sig=/zrWBz//dmTmAj841VxMOsVKNoe5Zlw//TR6nyMeJSg%3D" alt="E-Shiksha Logo">
                </a>
                <div class="header-title">Course Registration Confirmed</div>
                <div class="header-subtitle">Welcome to your learning journey</div>
            </div>
            
            <div class="content">
                <div class="greeting">Dear ${name},</div>
                
                <div class="enrollment-details">
                    <div class="enrollment-header">
                        <div class="enrollment-icon">✓</div>
                        <div>
                            <div class="enrollment-title">Successfully Enrolled</div>
                            <div class="enrollment-subtitle">Registration Complete</div>
                        </div>
                    </div>
                    <div class="course-name">${courseName}</div>
                    <div class="enrollment-status">
                        <div class="status-dot"></div>
                        Active Enrollment
                    </div>
                </div>
                
                <div class="message-text">
                    Thank you for enrolling in our course. Your registration has been successfully processed and you now have full access to all course materials, resources, and learning tools. We're committed to supporting your educational goals and professional development.
                </div>
                
                <div class="next-steps">
                    <div class="next-steps-title">
                        <div class="next-steps-icon">→</div>
                        Next Steps
                    </div>
                    <ul class="steps-list">
                        <li>
                            <div class="step-number">1</div>
                            <div>Access your personalized dashboard to view course content and track progress</div>
                        </li>
                        <li>
                            <div class="step-number">2</div>
                            <div>Complete your learner profile and set your learning preferences</div>
                        </li>
                        <li>
                            <div class="step-number">3</div>
                            <div>Join the course community and connect with fellow learners</div>
                        </li>
                        <li>
                            <div class="step-number">4</div>
                            <div>Begin with the course introduction and orientation materials</div>
                        </li>
                    </ul>
                </div>
                
                <div class="cta-section">
                    <a class="cta-button" href="https://e-shiksha-v8yj.vercel.app/dashboard">
                        Access Dashboard
                        <span class="cta-icon">→</span>
                    </a>
                </div>
                
                <div class="support-section">
                    <div class="support-title">Need Assistance?</div>
                    <div class="support-text">
                        Our dedicated support team is available to help you get the most out of your learning experience.
                    </div>
                    <a href="mailto:info@eshiksha.com" class="support-contact">
                        <span class="support-contact-icon">✉</span>
                        Contact Support
                    </a>
                </div>
            </div>
            
            <div class="footer">
                <div class="footer-text">
                    This email confirms your course enrollment. Please save this email for your records.
                </div>
                <div class="footer-links">
                    <a href="https://e-shiksha-v8yj.vercel.app" class="footer-link">Learning Platform</a>
                    <a href="#" class="footer-link">Course Catalog</a>
                    <a href="#" class="footer-link">Support Center</a>
                    <a href="#" class="footer-link">Privacy Policy</a>
                </div>
                <div class="footer-copyright">
                    © 2025 E-Shiksha. All rights reserved.
                </div>
            </div>
        </div>
    </body>
    
    </html>`;
};