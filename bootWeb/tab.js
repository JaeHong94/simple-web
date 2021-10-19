$('.list').click(function (e) {
  tabMenu(e.target.dataset.id);
});

function tabMenu(sequence) {
  $('.tab-button').removeClass('active').eq(sequence).addClass('active');
  $('.tab-content').removeClass('show').eq(sequence).addClass('show');
}