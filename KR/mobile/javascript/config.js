	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#1F2232";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#313131";bookConfig.iconColor="#ffffff";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#ffffff";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#000000";bookConfig.ToolBarAlpha="0";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Hide";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [{"name":"Facebook","url":"http://www.facebook.com/sharer.php?u=${url}&t=${title}&picture=${shot-img}","logo":"./files/mobile-ext/shares/facebook.png","title":"Facebook"}];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Show";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="3554";bookConfig.defaultZoomWidth="1100";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#B4BB4B";bookConfig.bgEndColor="#B4BB4B";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="0";bookConfig.bottomMargin="0";bookConfig.leftMargin="0";bookConfig.rightMargin="0";bookConfig.hideMiniFullscreen="yes";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#787558";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=404;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2332;;bookConfig.securityType="1";bookConfig.CreatedTime ="230817131815";bookConfig.bookTitle="Elle Korea, Agosto 2023";bookConfig.bookmarkCR="fdfd87a10d029825c8c28b382813f6f733efafd6";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Spanish",btnFirstPage:"Primera Página",btnNextPage:"Página siguiente",btnLastPage:"Última Página",btnPrePage:"Página Anterior",btnDownload:"Descargar",btnPrint:"Imprimir",btnSearch:"Buscar",btnClearSearch:"Borrar",frmSearchPrompt:"Clear",btnBookMark:"Tabla de contenidos",btnHelp:"Ayuda",btnHome:"Inicio",btnFullScreen:"Permitir Pantalla Completa",btnDisableFullScreen:"Deshabilitar Pantalla Completa",btnSoundOn:"Sonido Encendido",btnSoundOff:"Sonido Apagado",btnShareEmail:"Compartir",btnSocialShare:"Redes Sociales",btnZoomIn:"Agrandar",btnZoomOut:"Alejar",btnDragToMove:"Modo de Arrastre",btnAutoFlip:"Auto pasar",btnStopAutoFlip:"Detener Auto Pasar",btnGoToHome:"Volver al inicio",frmHelpCaption:"Ayuda",frmHelpTip1:"Ayuda uno",frmHelpTip2:"Arrastrar el Borde con el Maus",frmPrintCaption:"Imprimir",frmPrintBtnCaption:"Imprimir",frmPrintPrintAll:"Imprimir todas las Páginas",frmPrintPrintCurrentPage:"Imprimir Página actual",frmPrintPrintRange:"Imprimir Páginas:",frmPrintExampleCaption:"Ejemplo: 2,5,8-26",frmPrintPreparePage:"Preparando la Página:",frmPrintPrintFailed:"Error de Impresión:",pnlSearchInputInvalid:"(Mínimo 3 Caracteres)",loginCaption:"Entrar",loginInvalidPassword:"Contraseña no válida!",loginPasswordLabel:"Contraseña:",loginBtnLogin:"Entrar",loginBtnCancel:"Cancelar",btnThumb:"Miniaturas",lblPages:"Páginas:",lblPagesFound:"Páginas:",lblPageIndex:"Página",btnAbout:"Acerca de",frnAboutCaption:"Acerca de y Contacto",btnSinglePage:"Página Simple",btnDoublePage:"Página doble",btnSwicthLanguage:"Cambiar el Idioma",tipChangeLanguage:"Elegir un Idioma...",btnMoreOptionsLeft:"Mas Opciones",btnMoreOptionsRight:"Mas Opciones",btnFit:"Ajustar la Ventana",smallModeCaption:"Click para ver Pantalla Completa",btnAddAnnotation:"Agregar Notas",btnAnnotation:"Notas",FlipPageEditor_SaveAndExit:"Guardar y Salir",FlipPageEditor_Exit:"Salir",DrawToolWindow_Redo:"Rehacer",DrawToolWindow_Undo:"Deshacer",DrawToolWindow_Clear:"Limpiar",DrawToolWindow_Brush:"Pincel",DrawToolWindow_Width:"Ancho",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Color",DrawToolWindow_Eraser:"Borrador",DrawToolWindow_Rectangular:"Rectangular",DrawToolWindow_Ellipse:"Elipse",TStuff_BorderWidth:"Ancho de Borde",TStuff_BorderAlph:"Borde Alfa",TStuff_BorderColor:"Color del Borde",DrawToolWindow_TextNote:"Texto Nota",AnnotMark:"Marcador",lastpagebtnHelp:"Ultima Página",firstpagebtnHelp:"Primera Página",homebtnHelp:"Volver a la Página Principal",aboubtnHelp:"Acerca de",screenbtnHelp:"Abrir en Pantalla Completa",helpbtnHelp:"Mostrar la Ayuda",searchbtnHelp:"Buscar en Páginas",pagesbtnHelp:"Ver las miniaturas de este Folleto",bookmarkbtnHelp:"Abrir Marcador",AnnotmarkbtnHelp:"Abrir la Tabla de Contenidos",printbtnHelp:"Imprimir el folleto",soundbtnHelp:"Prender o Apagar el Sonido",sharebtnHelp:"Enviar Email a",socialSharebtnHelp:"Redes Sociales",zoominbtnHelp:"Agrandar",downloadbtnHelp:"Descargar el folleto",pagemodlebtnHelp:"Cambiar entre Modo de Página Simple y Doble",languagebtnHelp:"Cambiar Idioma",annotationbtnHelp:"Agregar Anotación",addbookmarkbtnHelp:"Agregar Marcador",removebookmarkbtnHelp:"Eliminar Marcador",updatebookmarkbtnHelp:"Actualizar Marcador",btnShoppingCart:"Carrito de Compras",Help_ShoppingCartbtn:"Ayudar Carrito de Compras",Help_btnNextPage:"Siguiente Página",Help_btnPrePage:"Anterior Página",Help_btnAutoFlip:"Auto pasar",Help_StopAutoFlip:"Detener auto pasar",btnaddbookmark:"Agregar",btndeletebookmark:"Eliminar",btnupdatebookmark:"Actualizar",frmyourbookmarks:"Mis Anotaciones",frmitems:"Artículos",DownloadFullPublication:"Publicación Completa",DownloadCurrentPage:"Página Actual",DownloadAttachedFiles:"Archivos Adjuntos",lblLink:"Enlace",btnCopy:"Botón Copiar",infCopyToClipboard:"Your browser does not support clipboard.",restorePage:"¿Desea recuperar la sesión anterior?",tmpl_Backgoundsoundon:"Fondo Sonido Encendido",tmpl_Backgoundsoundoff:"Fondo Sonido Apagado ",tmpl_Flipsoundon:"Flip Sonido Encendido",tmpl_Flipsoundoff:"Flip Sonido Apagado ",Help_PageIndex:"Número de actual Página",tmpl_PrintPageRanges:"Rango de Página",tmpl_PrintPreview:"Previsualizar",btnSelection:"Seleccionar Texto",loginNameLabel:"Nombre:",btnGotoPage:"Ir a Página",btnSettings:"Configuración",soundSettingTitle:"Sonido Configuración",closeFlipSound:"Sonido de pase de cierre",closeBackgroundSound:"Cerrar el Sonido de Fondo",frmShareCaption:"Compartiendo",frmShareLinkLabel:"Enlace:",frmShareBtnCopy:"Copiar",frmShareItemsGroupCaption:"Compartir con grupo",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"Ir a página ",btnPageBack:"Retroceder",btnPageForward:"Adelante",SelectTextCopy:"Copiar Texto",selectCopyButton:"Copiar",TStuffCart_TypeCart:"Carrito de Compras",TStuffCart_DetailedQuantity:"Cantidad",TStuffCart_DetailedPrice:"Precio",ShappingCart_Close:"Cerrar",ShappingCart_CheckOut:"Proceso",ShappingCart_Item:"Artículo",ShappingCart_Total:"Total precio",ShappingCart_AddCart:"Añadir a carrito",ShappingCart_InStock:"En Stock",TStuffCart_DetailedCost:"Costo de transporte",TStuffCart_DetailedTime:"Tiempo de entrega",TStuffCart_DetailedDay:"día(s)",ShappingCart_NotStock:"Poco en stock",btnCrop:"Ajustar",btnDragButton:"Arrastrar",btnFlipBook:"Libro flip",btnSlideMode:"Modo de presentación",btnSinglePageMode:"Modo de página sencilla",btnVertical:"Modo vertical",btnHotizontal:"Modo horizontal",btnClose:"Cerrar",btnDoublePage:"Página doble",btnBookStatus:"Book View",checkBoxInsert:"Ingrese página actual",lblLast:"Esta es la última página.",lblFirst:"Esta es la primera página.",lblFullscreen:"Clic para ver en pantalla completa",lblName:"Nombre",lblPassword:"Contraseña",lblLogin:"Entrar",lblCancel:"Cancelar",lblNoName:"Nombre de usuario no puede estar vacío.",lblNoPassword:"Contraseña no puede estar vacía.",lblNoCorrectLogin:"Ingrese el nombre y contraseña correctos.",btnVideo:"Galería de video",btnSlideShow:"Presentación",pnlSearchInputInvalid:"(Mínimo 3 Caracteres)",btnDragToMove:"Modo de Arrastre",btnPositionToMove:"Mover por posición del mouse",lblHelp1:"Arrastre la esquina de la página para ver",lblHelp2:"Doble clic para acercar y alejar",lblCopy:"Copiar",lblAddToPage:"añadir a página",lblPage:"Página",lblTitle:"Título",lblEdit:"Editar",lblDelete:"Borrar",lblRemoveAll:"Quitar todo",tltCursor:"cursor",tltAddHighlight:"añadir resaltado",tltAddTexts:"añadir textos",tltAddShapes:"añadir formas",tltAddNotes:"añadir notas",tltAddImageFile:"añadir archivo de imagen",tltAddSignature:"añadir firma",tltAddLine:"añadir línea",tltAddArrow:"añadir flecha",tltAddRect:"añadir recta",tltAddEllipse:"añadir elipse",lblDoubleClickToZoomIn:"Doble clic para acercar",frmShareCaption:"Compartiendo",frmShareLabel:"Comparir",frmShareInfo:"Puedes compartir tu publicación fácilmente a las redes sociales. Sólo haz clic abajo.",frminsertLabel:"Insertar a sitio",frminsertInfo:"Ue el código debajo para insertar en su sitio.",btnQRCode:"Clic para escanear código QR",btnRotateLeft:"Rotar a la izquierda",btnRotateRight:"Rotar a la derecha",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click on the logo to reach the official website of the company.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Switch horizontal and vertical view on mobile devices.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"Report",btnDoubleSinglePage:"Page switch",frmBookMark:"Marcador",btnFullscreen:"Pantalla completa",btnExitFullscreen:"Salir de pantalla completa",btnMore:"Más",frmPrintall:"Imprimir todas las páginas",frmPrintcurrent:"Imprimir la página actual",frmPrintRange:"Intervalo de impresión",frmPrintexample:"Ejemplo: 2,3,5-10",frmPrintbtn:"impresión",frmaboutcaption:"contacto",frmaboutcontactinformation:"Información de Contacto",frmaboutADDRESS:"Dirección",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Sitio web",frmaboutMOBILE:"Móvil",frmaboutAUTHOR:"Autor",frmaboutDESCRIPTION:"Descripción",frmSearch:"Búsqueda",frmToc:"Tabla de Contenido",btnTableOfContent:"Mostrar Tabla de Contenidos",lblDescription:"Título",frmLinkLabel:"Enlazar",frmQrcodeCaption:"Escanee el código bidimensional inferior para verlo con el teléfono móvil."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.515146","y":"0.965031","width":"0.045905","height":"-0.008468"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.sum37.co.kr"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.296562","y":"0.933907","width":"0.111920","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:jeffrey.molinaro@publicitas.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.439154","y":"0.925861","width":"0.117385","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:amandine.dufour@lgalondon.co.uk"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.625881","y":"0.917815","width":"0.076972","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:tanbilge@medialdt.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.108197","y":"0.909769","width":"0.109974","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:philippe.girardot@adnative.net"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.334883","y":"0.901723","width":"0.065801","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:msnider@hearst.es"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.449440","y":"0.893677","width":"0.096606","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:peggy.thay@publicitas.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.647961","y":"0.885631","width":"0.089560","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:karin.sodersten@aller.se"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.126562","y":"0.885631","width":"0.099991","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:ivanmontanari@hotmail.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.108684","y":"0.877585","width":"0.115081","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:arturo.contreras@publicitas.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.301570","y":"0.869539","width":"0.107042","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:audrey.cheong@publicitas.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.326213","y":"0.861493","width":"0.104379","height":"-0.007740"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:sinsegi-2@sinsegimedia.info"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.482604","y":"0.853447","width":"0.057446","height":"-0.007740"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:kai-pbi@gol.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.602619","y":"0.845401","width":"0.085240","height":"-0.007740"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:rschoenmaker@hearst.it"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.172121","y":"0.837356","width":"0.103223","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:mariam.wang@publicitas.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.158807","y":"0.829310","width":"0.114781","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:peter.landsheere@publicitas.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.287564","y":"0.821264","width":"0.091095","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:k.vellini@global-media.gr"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.601008","y":"0.813218","width":"0.118160","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:gerhard.schaffelhuber@burda.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.741486","y":"0.805172","width":"0.132553","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:philippe.leonard@lagardere-active.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.180564","y":"0.797126","width":"0.104124","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:dana.francoz@publicitas.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.443685","y":"0.789080","width":"0.098995","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:ocapoulade@altinamedia.com"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.517811","y":"0.781034","width":"0.079498","height":"-0.007741"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://lagardere-active.com"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.080923","y":"0.947374","width":"-0.001015","height":"-0.430325"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://IMAXtree.com/ART"}}],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.593810","y":"0.587262","width":"0.054219","height":"-0.009036"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://IMAXtree.com/ART"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.168920","y":"0.360584","width":"0.054512","height":"-0.009036"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://IMAXtree.com/ART"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.453476","y":"0.198170","width":"0.127224","height":"-0.014981"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://www.vazzo.net"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.916976","y":"0.933338","width":"-0.001357","height":"-0.348491"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://IMAXtree.com/ART"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.066635","y":"0.935795","width":"-0.001725","height":"-0.268925"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://IMAXtree.com/ART"}}],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.917714","y":"0.899855","width":"-0.001654","height":"-0.202212"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://IMAXTree.com"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.835888","y":"0.723116","width":"0.053187","height":"-0.009036"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://IMAXtree.com/ART"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.425364","y":"0.564334","width":"0.063460","height":"-0.009036"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://IMAXtree.com/EDITOR"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.295178","y":"0.933346","width":"0.063720","height":"-0.009036"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://IMAXtree.com/EDITOR"}}],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.882319","y":"0.579304","width":"-0.001445","height":"-0.397972"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://IMAXtree.com/EDITOR"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.917714","y":"0.933338","width":"-0.002425","height":"-0.200313"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://IMAXtree.com/EDITOR"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.094083","y":"0.308317","width":"0.063616","height":"-0.009036"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://IMAXtree.com/EDITOR"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.224879","y":"0.326799","width":"0.061533","height":"-0.008665"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:firstecho@naver.com"}}],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.858606","y":"0.105252","width":"0.039881","height":"-0.006703"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://elle.co.kr"}}],[],[],[],[],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}