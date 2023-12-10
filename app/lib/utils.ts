import emailjs from '@emailjs/browser';

export async function send_email(form_data: FormData, set_state: Function) {
  console.log("hey1", form_data);

  const rawFormData = {
    email: form_data.get('email'),
    name: form_data.get('name'),
    message: form_data.get('message'),
  }

  set_state({
    'message': null,
    'status': null
  });

  try {
    emailjs.send('gmail', 'raingardroofingcontact', rawFormData, 'user_r87lyqdfNcWvvEm845oeh')
    .then((result: Object) => {
      console.log(result, typeof result);
      set_state({
        'message': 'Thank you! You should hear back from us shortly. When we contact you look out for an email from test@emailaddress.com.',
        'status': 'ok'
      });
    }, (error: any) => {
      console.log('Invalid response:', error, typeof error);
      set_state({
        'message': 'An error occured on our side! Sorry, please try again. If the erorr persists, please contact test@emailaddress.com',
        'status': 'error'
      });
    });
  } catch (error: any) {
    console.log('Invalid response:', error, typeof error);
    set_state({
      'message': 'An error occured on our side! Sorry, please try again. If the erorr persists, please contact test@emailaddress.com',
      'status': 'error'
    });
  }

  
}