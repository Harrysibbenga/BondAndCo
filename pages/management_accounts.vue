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
          url: 'management_accounts.png',
          title: 'Management Accounts',
        },
        body: {
          left: false,
          url: 'management_accounts2.png',
          bullets: [],
          exten: {
            active: true,
            title:
              'Make key decisions at the right time by having up to date management information:',
            bullets: [
              'Prepare insightful monthly or quarterly management accounts',
              'Report on the key performance indicators that help you monitor your business',
              'Assist you with setting up your own in-house systems to capture and report pertinent information',
              'Supply management accounts to lenders and other interested parties (as directed by you)',
              'Present your results against budget',
            ],
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
