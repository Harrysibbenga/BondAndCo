<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <legals :legals="legals"></legals>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      legals: {
        head: {
          url: 'privacy_policy.jpg',
          title: 'Privacy Policy',
        },
        body: {
          content: [
            {
              title: 'Our privacy policy',
              text: 'We do not share any personal information we collect on you with any other organisations or individuals.<br /> We keep all information you provide to us completely confidential, no matter how or why you provide it. <br />Only those employees and contractors we specifically employ with relevant business duties may access personal information, and only to perform their duties. They are strictly prohibited from any other use. <br />No personal information will be provided to any third party, except for in the unusual event that we are required to do so by law. <br />By using any of the forms on our website, you implicitly agree to be bound by our privacy policy and legal disclaimer. <br />By using any of the forms on our website you agree to have your email address added to our mailing list.<br /> You may receive periodic mailings from us with information on services or news. If you do not wish to receive such mailings, please let us know by contacting us. All emails sent will give you the option to unsubscribe. <br /> We take all reasonable precautions to protect any personal data that our users may input via this website. We cannot, however, be responsible for loss or misuse of personal data which is intercepted or otherwise accessed by unauthorised persons. We therefore exclude all liability for this. <br /> We are committed to complying with EU and U.K. data protection laws to the extent that they apply to our use of personal information. <br /> You have the right to ask us for a copy of your personal data and have the right to amend or delete the data.',
            },
            {
              title: 'Your right to know',
              text: 'You can find contact details for our company representative on our contact us page.<br /> By providing your contact details, you are giving us your consent to use your personal data for periodic mailings. <br /> You may receive periodic mailings from us with information on services or news. If you do not wish to receive such mailings, please let us know by contacting us. All emails we send to you will give you the option to unsubscribe. <br /> We will retain your data until you instruct us to remove it or decide to unsubscribe from our newsletter. <br /> Your personal data might be accessed by web developers and other contractors. <br /> Your personal data will be stored until you tell us otherwise. <br /> In case you would like to exercise any of your GDPR related rights (the right to access, rectification, erasure, restriction of processing and right to data portability) please contact us via email or contact us form that can be found on Contact us page [link]. <br /> You have the right to lodge a complaint with the supervisory authority. <br /> It is not contractually binding to provide us with your personal data to receive a newsletter from us. <br /> We will not use personal data provided via the sign-up form for any other purpose than described above.',
            },
            {
              title: 'Cookies and tracking',
              text: 'To improve the overall experience of visiting our website, we use a server-based log to collect anonymous information about our website visitors. This data is only used to generate statistical charts and will not be used in any other way.',
            },
            {
              title: 'Use of Cookies on our website',
              text: 'By using this site, you have given us consent to use cookies. <br /> Cookies are small text files that are stored on your computer when you visit a website. They are mainly used as a way of improving the website functionalities or to provide more advanced statistical data.',
            },
            {
              title: 'Google Analytics',
              text: 'Our website uses Google Analytics which relies on cookies to generate more advanced visitor charts and data mining reports. Similar to our server-based logs, Google Analytics collects anonymous information that will not be used to identify our website visitors.',
            },
            {
              title: 'Controlling Cookies',
              text: "Your web browser (the software you use to access our website) should allow you to control the cookies that it stores on your computer. Please refer to the relevant supplier's website to find out more. <br /> If you feel that this site is not following its stated information policy, you may contact us by phone, email, or post.",
            },
            {
              title: 'Changes to this policy',
              text: 'We will post any changes to this policy on our website. Those changes will then apply to any future use by you of our website.',
            },
          ],
        },
      },
    }
  },
}
</script>
