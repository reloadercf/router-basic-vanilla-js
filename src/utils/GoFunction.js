// const textArea = document.getElementById('message');

export const GoFunction = () => {
  const buttonSend = document.getElementById('send');

  buttonSend?.addEventListener('click', () => {
    const textMenssage = document.getElementById('message').value;
    console.log(textMenssage);
  });
};
