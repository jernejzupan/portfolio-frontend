import { assign, setup } from 'xstate'

export const feedbackMachine = setup({
  types: {
    context: { feedback: '' }
  },
  guards: {
    feedbackValid: ({ context }) => context.feedback.length > 0
  }
}).createMachine({
  id: 'feedback',
  initial: 'prompt',
  context: {
    feedback: ''
  },
  states: {
    prompt: {
      on: {
        'feedback.good': 'thanks',
        'feedback.bad': 'form'
      }
    },
    form: {
      on: {
        'feedback.update': {
          actions: assign({
            feedback: ({ event }) => event.value
          })
        },
        back: { target: 'prompt' },
        submit: {
          guard: 'feedbackValid',
          target: 'thanks'
        }
      }
    },
    thanks: {},
    closed: {
      on: {
        restart: {
          target: 'prompt',
          actions: assign({
            feedback: ''
          })
        }
      }
    }
  },
  on: {
    close: '.closed'
  }
})
