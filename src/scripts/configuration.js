var Moment = require('moment');

module.exports = {
    // Company Activities
    companyActivities: [
        {
            id: 1003,
            title: "Invoice",
            store: "Sanfran Grocery",
            prefix: "for",
            amount: 200,
            comment: "Added today",
            date: Moment().format('M/D/YY'),
            due: 30,
            item: {
                product: 'Apple',
                detail: '2.00 x 100.00'
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
            amount: 100,
            comment: "Added 12 days ago",
            date: Moment().subtract( { days:12 } )
                    .format('M/D/YY'),
            due: 18,
            item: {
                product: 'Apple',
                detail: '1.00 x 100.00'
            }
        }
    ],
    // Email templates
    emailTemplates: [
        {
            type: "Invoice",
            subject: "Invoice [Invoice No.] from Courtney Dreamforce",
            body: [
                "Here is your invoice! We appreciate your prompt payment.",
                "Thanks for your business!",
                "Courtney Dreamforce"
            ]
        },
        {
            type: "Estimate",
            subject: "Estimate [Invoice No.] from Courtney Dreamforce",
            body: [
                "Here's your Estimate! We appreciate your prompt payment.",
                "Thanks for your business!",
                "Courtney Dreamforce"
            ]
        },
        {
            type: "Sales Receipt",
            subject: "Sales Receipt [Invoice No.] from Courtney Dreamforce",
            body: [
                "Here's your Sales Receipt! We appreciate your prompt payment.",
                "Thanks for your business!",
                "Courtney Dreamforce"
            ]
        },
    ]
};
