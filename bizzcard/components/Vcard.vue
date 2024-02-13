<template>
    <pre v-show="false" ref="vCard">
        BEGIN:VCARD
        VERSION:3.0
        N:{{ getSplitName }}
        FN:{{ getFullName }}
        ORG:{{ vCard.org }}
        ADR;TYPE=WORK:{{ vCard.addr }}
        TITLE:{{ vCard.title }}
        TEL;TYPE=CELL:{{ vCard.cell }}
        TEL;TYPE=WORK:{{ vCard.work }}
        TEL;TYPE=HOME:{{ vCard.home }}
        TEL;TYPE=MSG:{{ vCard.sms }}
        EMAIL;TYPE=WORK:{{ vCard.email }}
        URL;TYPE=Digital Business Card:{{ vCard.hostedURL }}
        URL:{{ vCard.website }}
        {{ getURLs }}
        KEY;TYPE=PGP;ENCODING=b:{{ vCard.key }}
        NOTE:{{ vCard.note }}
        UID:{{ vCard.uid }}
        END:VCARD
    </pre>
</template>

<script>
export default {
    props: ['vCard'],

    // 1. computed properties are like data properties, except they depend on other properties
    // 2. they are written like methods, but they do not accept any input arguements
    // 3. they are updated automatically when a dependency changes, while methods are called on when something happens, like with event handling for example
    // 4. they are used when outputting something that depends on something else
    computed: {
        getURLs() {
            return this.vCard.urls
                .map((e) => `URL;TYPE=${e.title}:${e.url}`)
                .join('\n')
        },

        getSplitName() {
            let fn = this.vCard.fn
            let ln = this.vCard.ln
            return `${ln ? ln : ''};${fn ? fn : ''};;;`
        },

        getFullName() {
            let fn = this.vCard.fn
            let ln = this.vCard.ln
            return (fn + ln).length ? `${fn ? fn : ''}${ln ? ln : ''}` : null
        }
    }
}
</script>