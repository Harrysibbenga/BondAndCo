<template>
  <v-container id="contact" class="primary">
    <h2 class="text-h2 text-center pb-5">Contact Us</h2>
    <form @submit.prevent="submit">
      <v-row align="center">
        <v-col cols="12" md="6">
          <label for="fname">First name</label>
          <v-text-field
            v-model="fname"
            :error-messages="fnameErrors"
            :counter="15"
            light
            name="fname"
            class="white"
            color="black"
            required
            @input="$v.fname.$touch()"
            @blur="$v.fname.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <label for="lname">Last name</label>
          <v-text-field
            v-model="lname"
            :error-messages="lnameErrors"
            :counter="15"
            light
            name="lname"
            class="white"
            color="black"
            required
            @input="$v.lname.$touch()"
            @blur="$v.lname.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <label for="email">Email</label>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            light
            name="email"
            class="white"
            color="black"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="px-6">
          <v-radio-group
            v-model="subject"
            :error-messages="subjectErrors"
            required
            name="subject"
            @change="$v.subject.$touch()"
            @blur="$v.subject.$touch()"
          >
            <v-row align="center" justify="space-between" class="pb-5">
              <v-radio
                label="Accounts preparation"
                value="Accounts preparation"
                color="white"
              ></v-radio>
              <v-radio
                label="Tax returns"
                color="white"
                value="Tax returns"
              ></v-radio>
              <v-radio
                label="Business advice"
                value="Business advice"
                color="white"
              ></v-radio>
              <v-radio
                label="Book keeping"
                color="white"
                value="Book keeping"
              ></v-radio>
            </v-row>
            <v-row align="center" justify="space-between">
              <v-radio
                label="Management accounts"
                value="Management accounts"
                color="white"
              ></v-radio>
              <v-radio label="VAT" color="white" value="VAT"></v-radio>
              <v-radio label="Payroll" color="white" value="Payroll"></v-radio>
              <v-radio
                label="Company Secretarial"
                value="Company Secretarial"
                color="white"
              ></v-radio>
            </v-row>
          </v-radio-group>
        </v-col>
        <v-col cols="12">
          <label for="message">Message</label>
          <v-textarea
            v-model="message"
            name="message"
            light
            :error-messages="messageErrors"
            color="black"
            class="white"
            clearable
            required
            @input="$v.message.$touch()"
            @blur="$v.message.$touch()"
          ></v-textarea>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn class="mr-4 white black--text" type="submit"> submit </v-btn>
          <v-btn class="mr-4 white black--text" @click.native="clear">
            clear
          </v-btn>
        </v-col>
      </v-row>
      <v-alert v-if="msg.message" :type="msg.type" class="mt-6">
        {{ msg.message }}
      </v-alert>
    </form>
  </v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import emailjs from 'emailjs-com'

export default {
  mixins: [validationMixin],

  validations: {
    fname: { required, maxLength: maxLength(15) },
    lname: { required, maxLength: maxLength(15) },
    email: { required, email },
    message: { required },
    subject: {
      select(val) {
        return val
      },
    },
  },

  data: () => ({
    fname: '',
    lname: '',
    email: '',
    subject: '',
    message: '',
    msg: {
      type: '',
      message: '',
    },
  }),

  computed: {
    subjectErrors() {
      const errors = []
      if (!this.$v.subject.$dirty) return errors
      !this.$v.subject.select &&
        errors.push('You must select a subject to continue!')
      return errors
    },
    fnameErrors() {
      const errors = []
      if (!this.$v.fname.$dirty) return errors
      !this.$v.fname.maxLength &&
        errors.push('First name must be at most 15 characters long')
      !this.$v.fname.required && errors.push('First name is required.')
      return errors
    },
    lnameErrors() {
      const errors = []
      if (!this.$v.lname.$dirty) return errors
      !this.$v.lname.maxLength &&
        errors.push('Last name must be at most 15 characters long')
      !this.$v.lname.required && errors.push('Last name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    messageErrors() {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.required && errors.push('A message is required.')
      return errors
    },
  },

  methods: {
    submit(event) {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.msg = {
          type: 'error',
          message: 'Please fill the form correctly!',
        }
      } else {
        this.msg = {
          type: 'info',
          message: 'Sending ...',
        }
        this.sendEmail(event)
      }
    },
    sendEmail(e) {
      emailjs
        .sendForm(
          'service_mqk22oq',
          'template_ha88ftm',
          e.target,
          'user_nzDfhN2MWfSPkCKqEp7Td'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.status, result.text)
            console.log(e.target)
            this.msg = {
              type: 'success',
              message: 'Message sent someone will be in touch shortly',
            }
          },
          (error) => {
            console.log('FAILED...', error)
            this.msg = {
              type: 'error',
              message: error,
            }
          }
        )
        .then(() => {
          this.clear()
        })
    },
    clear() {
      this.$v.$reset()
      this.fname = ''
      this.lname = ''
      this.email = ''
      this.subject = ''
      this.message = ''
      this.msg = {
        type: '',
        message: '',
      }
    },
  },
}
</script>
