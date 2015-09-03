module.exports = {
    // Header texts
    header: {
        texts: {
            "": {
                title: "Company Activity"
            },
            "invoices": {
                title: "Invoices"
            },
            "invoice-detail": {
                title: "Invoice",
                left: "Invoices",
                right: "Activity"
            },
            "send-invoice": {
                title: "Send Invoice",
                right: "Send"
            },
            "settings": {
                title: "Settings",
                right: "Sign Out"
            },
            "sales-forms": {
                title: "Sales Forms",
                left: "Settings",
                right: ' '
            },
            "default-message": {
                title: "Default Message",
                left: "Cancel",
                right: "Save"
            }
        }
    },
    // Action Menu
    actionMenu: {
        items: [
            {
                label: "Email",
                onClickEvent: true
            },
            {
                label: "Copy"
            },
            {
                label: "Print"
            },
            {
                label: "Delete"
            }
        ]
    },
    // Template Selector
    templateSelector: {
        simulateDelta: false,
        selectorHeight: 40
    }
}
