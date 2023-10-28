import { getFormData } from './form';

const sbmtForm = document.getElementById('submit-form') as HTMLFormElement;

sbmtForm.addEventListener('submit', function (e: SubmitEvent) {
    e.preventDefault();
    const formData = getFormData; 
    console.log(formData);
});
