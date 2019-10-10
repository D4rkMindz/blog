(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{212:function(t,e,a){"use strict";a.r(e);var o=a(0),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-install-xdebug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-xdebug","aria-hidden":"true"}},[t._v("#")]),t._v(" How to install XDebug")]),t._v(" "),a("p",[t._v("XDebug is the most used PHP debugger.\nPHPStorm, VSCode, Eclipse and other IDEs integrate perfectly with it.\nThe creator of XDebug "),a("a",{attrs:{href:"https://github.com/derickr",target:"_blank",rel:"noopener noreferrer"}},[t._v("Derick Rethans"),a("OutboundLink")],1),t._v(" (leave a ⭐) makes the installation easier for us. Previously, you had to decide which version to download based on the PHP version, processor architecture, and other factors. Today it all works much easier.")]),t._v(" "),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),a("p",[t._v("First, make sure Apache is not running in your "),a("a",{attrs:{href:"https://i.stack.imgur.com/z95JC.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("XAMPP control-panel"),a("OutboundLink")],1),t._v(".\nIn order to install XDebug on Windows, you need to set the configuration of PHP to a file. To do this, open the terminal (WINDOWS + R, type "),a("code",[t._v("cmd")]),t._v(") and navigate to your desktop using and output the PHP configuration to a file.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your-username"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Desktop\nphp -i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" phpinfo.txt\n")])])]),a("p",[t._v("The "),a("code",[t._v("phpinfo.txt")]),t._v(" file is now on your desktop. You open it with an editor that you can copy the content.")]),t._v(" "),a("p",[t._v("Then go to "),a("a",{attrs:{href:"https://xdebug.org/wizard",target:"_blank",rel:"noopener noreferrer"}},[t._v("the XDebug Wizard"),a("OutboundLink")],1),t._v(" and paste the text there.\nXDebug will automatically provide you with the correct "),a("code",[t._v(".dll")]),t._v(" file.\nDownload this file and move it to the "),a("code",[t._v("C:\\xampp\\php\\ext")]),t._v(" folder.")]),t._v(" "),a("p",[t._v("Then you need to add XDebug to the PHP configuration file "),a("code",[t._v("php.ini")]),t._v(" as a debugger extension. The "),a("code",[t._v("php.ini")]),t._v(" file is located at "),a("code",[t._v("C:\\xampp\\php\\php.ini")]),t._v(". Open it with an editor and add the following lines at the top:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("zend_extension = C:\\xampp\\php\\ext\\<the-name-of-the-dll-you-just-downloaded>.dll\nxdebug.remote_enable = 1\n")])])]),a("p",[t._v("To check if XDebug really works, I recommend that you create a file to output the PHP configuration in your Webroot.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// C:\\xampp\\htdocs\\info.php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("phpinfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),a("p",[t._v("Now start Apache from your XAMPP control-panel and visit "),a("a",{attrs:{href:"http://localhost/info.php",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("http://localhost/info.php")]),a("OutboundLink")],1),t._v(" in your browser.")])])}),[],!1,null,null,null);e.default=n.exports}}]);