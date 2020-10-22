(function() {
  var anchor_name_split_i, body_class_split_i, correct_notificat0r_text, enhance_social_links, new_text, old_text;

  correct_notificat0r_text = function(old_text, new_text) {
    var document_title_text;
    if (document.getElementById('notificat0r') === null) {

    } else {
      document_title_text = document.title.replace(old_text, new_text);
      return document.getElementById('notificat0r').innerHTML = document_title_text;
    }
  };

  enhance_social_links = function(anchor_name_split_i, body_class_split_i) {
    var body_class, doc_url, element_anchor_name_lookup;
    doc_url = document.URL;
    element_anchor_name_lookup = doc_url.split('#')[anchor_name_split_i];
    body_class = doc_url.split('/')[body_class_split_i];
    if (element_anchor_name_lookup === void 0) {

    } else if ((element_anchor_name_lookup === "previously-kai") && (body_class === 'social-links')) {
      return document.getElementsByTagName('body')[0].setAttribute('class', 'highlight social-links');
    }
  };

  old_text = 'their';

  new_text = 'the';

  correct_notificat0r_text(old_text, new_text);

  anchor_name_split_i = 1;

  body_class_split_i = 3;

  enhance_social_links(anchor_name_split_i, body_class_split_i);

}).call(this);
