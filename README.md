To make links in the footer be the exact width of the text below, these steps were made: Footer is flex column with center aligned items. Horizontal line takes 100% width explicitly, otherwise it collapses to a point. Links and text below are in a div which is an inline-block!! This is important to force it to have variable width depending on content inside. Next we have a div of links which is a flex row justified with space between. And lastly the text which defines the width must be an inline element, thus its a span.