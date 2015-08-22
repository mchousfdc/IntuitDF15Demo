var Moment = require('moment');

module.exports = {
    // Company Activities
    companyActivities: [
        {
            id: 1003,
            title: "Invoice",
            store: "Sanfran grocery",
            prefix: "for",
            amount: 100,
            comment: "Added today",
            date: Moment().format('M/D/YY'),
            due: 30,
            item: {
                product: 'Apple', 
                detail: '1.00 x 100.00'
            }
        },
        {
            id: 1002,
            title: "Invoice",
            store: "Sanfran grocery",
            prefix: "for",
            amount: 25000,
            comment: "Edited 12 days ago",
            date: Moment().subtract( { days:12 } )
                    .format('M/D/YY'),
            due: 18,
            item: {
                product: 'Bar', 
                detail: '500.00 x 50.00'
            },
            payments: [        
                {
                    title: "Payment",
                    store: "Sanfran grocery",
                    prefix: "from",
                    amount: 5000,
                    comment: "Added 12 days ago"
                },
                {
                    title: "Payment",
                    store: "Sanfran grocery",
                    prefix: "from",
                    amount: 4500,
                    comment: "Added 12 days ago"
                }
            ]
        },
        {   
            id: 1001,
            title: "Invoice",
            store: "Best Store",
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
