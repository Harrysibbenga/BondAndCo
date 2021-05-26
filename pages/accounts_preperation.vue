<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <service :service="service"></service>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      service: {
        head: {
          url: 'Accounts_prep.png',
          title: 'Accounts Preparation',
        },
        body: {
          left: false,
          url: 'Accounts_prep2.png',
          bullets: [
            'Prepare accounts to help in completion of self-assessment tax returns',
            'Produce financial statements to file at Companies House, ensuring the minimum amount of your financial information is made public.',
            'Accounts are prepared to agreed timescales and deadlines.',
            'Identify areas where we can assist in minimising your tax liability.',
            'Use the accounts to help you measure achievement of your goals and what actions you need to take to plan for the future.  We take the time to explain your accounts to you.',
          ],
          exten: {
            active: false,
            title: '',
            bullets: [],
          },
          exten2: {
            active: false,
            title: '',
            bullets: [],
          },
          exten3: {
            active: false,
            title: '',
            bullets: [],
          },
        },
      },
    }
  },
}
</script>
