$('#text_input').on("change", () => {
    let text = $('#text_input').val();
    $('#show_text').text(text);
});