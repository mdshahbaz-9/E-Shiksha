
exports.passwordUpdated = (email, name) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Update Confirmation</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 0;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 2rem;
        }
        
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        
        .content {
            padding: 2rem;
        }
        
        .greeting {
            font-size: 18px;
            color: #333;
            margin-bottom: 1rem;
        }
        
        .message {
            color: #555;
            margin-bottom: 1.5rem;
            font-size: 16px;
        }
        
        .security-notice {
            background-color: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 1rem;
            margin: 1.5rem 0;
            border-radius: 4px;
        }
        
        .security-notice p {
            margin: 0;
            color: #856404;
            font-weight: 500;
        }
        
        .email-info {
            background-color: #f8f9fa;
            padding: 1rem;
            border-radius: 6px;
            margin: 1rem 0;
            border: 1px solid #e9ecef;
        }
        
        .email-info strong {
            color: #495057;
        }
        
        .support-info {
            background-color: #d1ecf1;
            border-left: 4px solid #17a2b8;
            padding: 1rem;
            margin: 1.5rem 0;
            border-radius: 4px;
        }
        
        .support-info p {
            margin: 0;
            color: #0c5460;
        }
        
        .support-email {
            color: #17a2b8;
            text-decoration: none;
            font-weight: 500;
        }
        
        .support-email:hover {
            text-decoration: underline;
        }
        
        .footer {
            background-color: #f8f9fa;
            text-align: center;
            padding: 1.5rem;
            color: #6c757d;
            font-size: 14px;
            border-top: 1px solid #e9ecef;
        }
        
        .timestamp {
            font-size: 12px;
            color: #868e96;
            margin-top: 1rem;
        }
        
        @media (max-width: 600px) {
            .container {
                margin: 1rem;
                border-radius: 8px;
            }
            
            .content {
                padding: 1.5rem;
            }
            
            .header {
                padding: 1.5rem;
            }
            
            .header h1 {
                font-size: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔐 Password Update Confirmation</h1>
        </div>
        
        <div class="content">
            <div class="greeting">
                Hey ${name},
            </div>
            
            <div class="message">
                Your password has been successfully updated for your StudyNotion account.
            </div>
            
            <div class="email-info">
                <strong>Account Email:</strong> ${email}
            </div>
            
            <div class="security-notice">
                <p>
                    <strong>⚠️ Security Notice:</strong> If you did not request this password change, please contact us immediately to secure your account.
                </p>
            </div>
            
            <div class="support-info">
                <p>
                    If you have any questions or need further assistance, please feel free to reach out to us at 
                    <a href="mailto:info@eshiksha.com" class="support-email">info@eshiksha.com</a>. 
                    We are here to help!
                </p>
            </div>
            
            <div class="timestamp">
                Email sent on: ${new Date().toLocaleString()}
            </div>
        </div>
        
        <div class="footer">
            <p>© 2024 StudyNotion. All rights reserved.</p>
            <p>This is an automated message. Please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>
    `;
};