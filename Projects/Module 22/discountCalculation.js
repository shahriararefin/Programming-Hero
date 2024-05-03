function ticketPrice(ticketQuantity) {

    const first100rate = 100;
    const second100rate = 90;
    const restTicketrate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100rate;
        return price;
    }

    else if (ticketQuantity > 100 && ticketQuantity <= 200) {
        const first100 = 100 * first100rate;
        const remaining = ticketQuantity - 100;
        const second100 = remaining * second100rate;
        const price = first100 + second100;
        return price;
}

    else {
            const first100 = 100 * first100rate;
            const second100 = 100 * second100rate;
            const remaining = ticketQuantity - 200;
            const restTicket = remaining * restTicketrate;
            const price = first100 + second100 + restTicket;
            return price;
    }


}

    const price = ticketPrice(501);

    console.log(price);