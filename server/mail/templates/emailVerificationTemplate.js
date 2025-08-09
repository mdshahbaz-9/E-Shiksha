const otpTemplate = (otp) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>OTP Verification Email</title>
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
            
            .message-text {
                font-size: 16px;
                color: #475569;
                line-height: 1.7;
                margin-bottom: 32px;
            }
            
            .otp-section {
                background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                border: 1px solid #e2e8f0;
                border-radius: 12px;
                padding: 32px;
                margin: 32px 0;
                text-align: center;
                position: relative;
            }
            
            .otp-section::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #3b82f6, #8b5cf6);
                border-radius: 12px 12px 0 0;
            }
            
            .otp-header {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 20px;
            }
            
            .otp-icon {
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
            
            .otp-title {
                font-size: 18px;
                font-weight: 600;
                color: #1e293b;
            }
            
            .otp-code {
                font-size: 36px;
                font-weight: 700;
                color: #1e293b;
                letter-spacing: 8px;
                margin: 20px 0;
                padding: 16px 24px;
                background: #ffffff;
                border: 2px solid #e2e8f0;
                border-radius: 8px;
                display: inline-block;
                font-family: 'Courier New', monospace;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            .otp-validity {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 16px;
                font-size: 14px;
                color: #64748b;
            }
            
            .timer-icon {
                width: 20px;
                height: 20px;
                background: #f59e0b;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 8px;
                color: white;
                font-size: 10px;
                font-weight: 600;
            }
            
            .security-notice {
                background: #fef3c7;
                border: 1px solid #fbbf24;
                border-radius: 8px;
                padding: 16px;
                margin: 24px 0;
                display: flex;
                align-items: flex-start;
            }
            
            .security-icon {
                width: 24px;
                height: 24px;
                background: #f59e0b;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 12px;
                color: white;
                font-size: 12px;
                font-weight: 600;
                flex-shrink: 0;
            }
            
            .security-text {
                font-size: 14px;
                color: #92400e;
                line-height: 1.5;
            }
            
            .security-title {
                font-weight: 600;
                margin-bottom: 4px;
            }
            
            .instructions {
                background: #ffffff;
                border: 1px solid #e2e8f0;
                border-radius: 12px;
                padding: 24px;
                margin: 32px 0;
            }
            
            .instructions-title {
                font-size: 18px;
                font-weight: 600;
                color: #1e293b;
                margin-bottom: 16px;
                display: flex;
                align-items: center;
            }
            
            .instructions-icon {
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
            
            .instructions-list {
                list-style: none;
                padding: 0;
            }
            
            .instructions-list li {
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
                
                .otp-code {
                    font-size: 28px;
                    letter-spacing: 6px;
                    padding: 12px 20px;
                }
                
                .footer-links {
                    flex-direction: column;
                    gap: 12px;
                }
            }
        </style>
    </head>
    
    <body>
        <div class="email-container">
            <div class="header">
               
                <div class="header-title">Account Verification</div>
                <div class="header-subtitle">Secure access to your account</div>
            </div>
            
            <div class="content">
                <div class="greeting">Dear User,</div>
                
                <div class="message-text">
                    Thank you for registering with  E-shiksha. To ensure the security of your account and complete your registration, please verify your email address using the One-Time Password (OTP) provided below.
                </div>
                
                <div class="otp-section">
                    <div class="otp-header">
                        <div class="otp-icon">#</div>
                        <div class="otp-title">Your Verification Code</div>
                    </div>
                    <div class="otp-code">${otp}</div>
                    <div class="otp-validity">
                        <div class="timer-icon">⏱</div>
                        <span>This code expires in 5 minutes</span>
                    </div>
                </div>
                
                <div class="security-notice">
                    <div class="security-icon">⚠</div>
                    <div class="security-text">
                        <div class="security-title">Security Notice</div>
                        If you did not request this verification code, please ignore this email. Do not share this code with anyone for your account security.
                    </div>
                </div>
                
                <div class="instructions">
                    <div class="instructions-title">
                        <div class="instructions-icon">?</div>
                        How to Use Your OTP
                    </div>
                    <ul class="instructions-list">
                        <li>
                            <div class="step-number">1</div>
                            <div>Return to the E-shiksha registration page where you left off</div>
                        </li>
                        <li>
                            <div class="step-number">2</div>
                            <div>Enter the 6-digit verification code exactly as shown above</div>
                        </li>
                        <li>
                            <div class="step-number">3</div>
                            <div>Click "Verify" to complete your account setup</div>
                        </li>
                        <li>
                            <div class="step-number">4</div>
                            <div>You'll be redirected to your dashboard once verification is complete</div>
                        </li>
                    </ul>
                </div>
                
                <div class="support-section">
                    <div class="support-title">Need Assistance?</div>
                    <div class="support-text">
                        If you're experiencing issues with verification or need help with your account, our support team is ready to assist you.
                    </div>
                    <a href="mailto:info@eshiksha.com" class="support-contact">
                        <span class="support-contact-icon">✉</span>
                        Contact Support
                    </a>
                </div>
            </div>
            
            <div class="footer">
                <div class="footer-text">
                    This is an automated security email. Please do not reply to this message.
                </div>
                <div class="footer-links">
                    <a href="https://e-shiksha-v8yj.vercel.app/" class="footer-link">Learning Platform</a>
                    <a href="#" class="footer-link">Help Center</a>
                    <a href="#" class="footer-link">Privacy Policy</a>
                    <a href="#" class="footer-link">Terms of Service</a>
                </div>
                <div class="footer-copyright">
                    © 2025 E-shiksha. All rights reserved.
                </div>
            </div>
        </div>
    </body>
    
    </html>`;
};

module.exports = otpTemplate;