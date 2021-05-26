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
          url: 'business_advice.png',
          title: 'Business Advice',
        },
        body: {
          left: false,
          url: 'business_advice2.png',
          bullets: [
            'We can offer regular meetings to support you in developing your business. We will listen to you and provide suggestions and ideas.  These can be as frequent as you need, although we would suggest monthly, quarterly or annually depending on your requirements.',
          ],
          exten: {
            active: true,
            title: 'This would suit you if:',
            bullets: [
              'You are a business owner that has little other support. It can be lonely at the top and you need someone to turn to for advice.',
              'You would like to bounce ideas around and receive challenge, so that you get the best outcome.  Sometimes a fresh pair of eyes can help you see things in a different way, which can be beneficial.',
              'You want to periodically dedicate time to focusing on your business strategy; taking time away from the day to day pressures that can cloud thoughts and prevent strategic thinking.',
            ],
          },
          exten2: {
            active: true,
            title: 'The meetings can be used to:',
            bullets: [
              'Review your management accounts and information',
              'Consider your business strategy',
              'Take stock of where you are in relation to your plan and your goals',
              'Think about marketing ideas and how you can improve the level of custom',
              'Employee issues',
              'Cost saving strategies',
              'Tax saving ideas and queries',
            ],
          },
          exten3: {
            active: true,
            title:
              'An agreed action plan is formulated from each meeting that we can then use to monitor and step forward at each subsequent meeting.',
            bullets: [],
          },
        },
      },
    }
  },
}
</script>
