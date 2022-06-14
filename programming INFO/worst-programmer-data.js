var
    pro1 = "Hamza Bendelladj , Born in 1988 in Tizi Ouzou is an Algerian hacker who goes by the code name BX1 and has been nicknamed the 'Smiling Hacker'. Hamza is a polyglot speaking 5 languages often used in profit in view of his linguistic knowledge in order to extract money almost everywhere in the world from his prey. This earned him to be searched for 5 years. He was on the top 10 list of the most wanted hackers by Interpol and the FBI for allegedly embezzling tens of millions of dollars from more than two hundred American and European financial institutions, via a computer virus, the 'SpyEYE Botnet' that infected more than 60 million computers worldwide (mostly from the United States), which he developed with his Russian accomplice Aleksandr Andreivich Panin, aka 'Gribodemon', to steal banking information stored on infected computers. He also hacked the official website of the Israel government. He is said to have embezzled more than $ 280 million, redistributing it to various African and Palestinian NGOs[citation needed].The individual in question has allegedly been offered by the Israeli governmento to work for the Hebrew state to strengthen its computer system in exchange for intervention with the United States that would allow for a lighter sentence, or even drop the charges. Proposal categorically refused by the United Statesbut there no source for this information so far........",
    pro2 = 'Kevin Mitnick got his start as a teen. In 1981, he was charged with stealing computer manuals from Pacific Bell. In 1982, he hacked the North American Defense Command (NORAD), an achievement that inspired the 1983 film War Games. In 1989, he hacked Digital Equipment Corporation\'s (DEC) network and made copies of their software. Because DEC was a leading computer manufacturer at the time, this act put Mitnick on the map. He was later arrested, convicted and sent to prison. During his conditional release, he hacked Pacific Bell\'s voicemail systems.Throughout his hacking career, Mitnick never exploited the access and data he obtained. It\'s widely believed that he once obtained full control of Pacific Bell\'s network simply to prove it could be done. A warrant was issued for his arrest for the Pacific Bell incident, but Mitnick fled and lived in hiding for more than two years. When caught, he served time in prison for multiple counts of wire fraud and computer fraud.Although Mitnick ultimately went white hat, he may be part of the both-hats grey area. According to Wired, in 2014, he launched "Mitnick\'s Absolute Zero Day Exploit Exchange," which sells unpatched, critical software exploits to the highest bidder........',
    pro3 = 'Jonathan James hacked several companies. According to the New York Times, what really earned James attention was his hack into the computers of the United States Department of Defense. Even more impressive was the fact that James was only 15 at the time. In an interview with PC Mag, James admitted that he was partly inspired by the book The Cuckoo’s Egg, which details the hunt for a computer hacker in the 1980s. His hacking allowed him to access over 3,000 messages from government employees, usernames, passwords and other sensitive data.James was arrested in 2000 and was sentenced to a six months house arrest and banned from recreational computer use. However, a probation violation caused him to serve six months in jail. Jonathan James became the youngest person to be convicted of violating cyber crime laws. In 2007, TJX, a department store, was hacked and many customer’s private information were compromised. Despite a lack of evidence, authorities suspect that James may have been involved.In 2008, James committed suicide by gunshot. According to the Daily Mail, his suicide note stated, “I have no faith in the \'justice\' system. Perhaps my actions today, and this letter, will send a stronger message to the public. Either way, I have lost control over this situation, and this is my only way to regain control........',
    z = 0,
    x = 0,
    i = 0;
    

button = document.getElementById('type-button1');
button.onclick = function () {
    'use strict';
    var taype = setInterval(function () {
        
        document.getElementById('type-pro1').textContent += pro1[i];
        i += 1;
        if (i > pro1.length - 1) {
            
            clearInterval(taype);
        }
    }, 50);
};
button2 = document.getElementById('type-button2');
button2.onclick = function () {
    'use strict';
    var taype = setInterval(function () {
        
        document.getElementById('type-pro2').textContent += pro2[x];
        x += 1;
        if (x > pro2.length - 1) {
            
            clearInterval(taype);
        }
    }, 50);
};
button3 = document.getElementById('type-button3');
button3.onclick = function () {
    'use strict';
    var taype = setInterval(function () {
        
        document.getElementById('type-pro3').textContent += pro3[z];
        z += 1;
        if (z > pro3.length - 1) {
            
            clearInterval(taype);
        }
    }, 50);
};
