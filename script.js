$(function () {
    const blocks = {
        "blocks-left": "anim-move-left",
        "blocks-right": "anim-move-right",
        "blocks-text": "anim-appear"
    };

    $(window).scroll(function () {
        for (const block in blocks) {
            $(`.${block}`).each(function () {
                let pos = $(this).offset().top;
                if (pos < $(window).scrollTop() + 600) {
                    $(this).addClass(`${blocks[block]}`);
                }
            });
        }
    });
});