var Moment = require('moment');

module.exports = {
    // Company Activities
    companyActivities: [
        {
            id: 1003,
            title: "Invoice",
            store: "Green Leaf Organics",
            prefix: "for",
            amount: 234.87,
            comment: "Added today",
            date: Moment().format('M/D/YY'),
            due: 30,
            item: {
                product: 'Apple',
                detail: '2.00 x 117.435'
            }
        },
        {
            id: 1002,
            title: "Invoice",
            store: "Sanfran Grocery",
            prefix: "for",
            amount: 700,
            comment: "Edited 12 days ago",
            date: Moment().subtract( { days:12 } )
                    .format('M/D/YY'),
            due: 18,
            item: {
                product: 'Bar',
                detail: '7.00 x 100.00'
            },
            payments: [
                {
                    title: "Payment",
                    store: "Sanfran Grocery",
                    prefix: "from",
                    amount: 200,
                    comment: "Added 12 days ago"
                },
                {
                    title: "Payment",
                    store: "Sanfran Grocery",
                    prefix: "from",
                    amount: 300,
                    comment: "Added 12 days ago"
                }
            ]
        },
        {
            id: 1001,
            title: "Invoice",
            store: "FreshFood Market",
            prefix: "for",
            amount: 98.76,
            comment: "Added 12 days ago",
            date: Moment().subtract( { days:12 } )
                    .format('M/D/YY'),
            due: 18,
            item: {
                product: 'Apple',
                detail: '1.00 x 98.76'
            }
        }
    ],
    // Email template from clipboard
    customTemplate: {
        body: [
            "Hi,",
            "I want to personally thank you for your business and your " +
            "decision to invest in local, organic-focused businesses like " +
            "HealthySnacks!",
            "Attached to this email is your invoice.  Let me know if you " +
            "have any questions!",
            "Thanks,"
        ],
        signature: [
            "Samantha Smith",
            "415.444.7575",
            "HealthySnacks",
            "\"Simple ingredients for a healthy lifestyle\""
        ]
    },
    // Email templates
    emailTemplates: [
        {
            type: "Invoice",
            subject: "Invoice [Invoice No.] from Samantha Smith",
            body: [
                "Please see your invoice below. We appreciate your payment!",
                "Thanks for your business!",
                "Samantha Smith"
            ]
        },
        {
            type: "Estimate",
            subject: "Estimate [Invoice No.] from Samantha Smith",
            body: [
                "Here is your Estimate! We appreciate your prompt payment.",
                "Thanks for your business!",
                "Samantha Smith"
            ]
        },
        {
            type: "Sales Receipt",
            subject: "Sales Receipt [Invoice No.] from Samantha Smith",
            body: [
                "Here's your Sales Receipt! We appreciate your prompt payment.",
                "Thanks for your business!",
                "Samantha Smith"
            ]
        },
    ]
};
