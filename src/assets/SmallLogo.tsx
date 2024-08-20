import {View, Text} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SmallLogo = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={89}
      height={34}
      fill="none"
      {...props}>
      <Path
        fill="#76BC3F"
        fillRule="evenodd"
        d="M50.421 4.931v1.136h-.132v.815h-.136v.255c-.24.077-.268.328-.268.625-.215.109-.755.77-1.16 1.055-.21.15-1.344.722-1.394.834l-.738.066-.24-1.572.038-.444c0-.943.219-1.275.404-2.013l.05.047.272-.251.998-.82c.285-.053.627-.297.763-.297h.269v-.189l.074-.123.982-.306.218 1.182Zm-29.544 13.87h-.202c-.103.413-1.118 1.414-1.547 1.449-.025.239-.202.312-.47.312h-.334l-.066.379-.343.116c-.346.008-.503-.054-.598.197h-.404l-1.073.15-.07-.023a45.49 45.49 0 0 1-1.345-.317c-.697-.297-.325-.502-1.076-.502-.252-.355-.058-.185-.417-.486-.198-.163-.38-.19-.388-.522-.511-.127-.8-.803-1.023-.973l-.437.548-.066-.042c-.008.278.02.29-.268.313-.029.34-.54.996-.738 1.131h-.203c-.103.418-1.117 1.414-1.546 1.449-.03.24-.207.313-.47.313h-.335l-.066.378-.342.116c-.35.012-.503-.05-.602.2h-.4l-1.073.152-.07-.027c-.013 0-1.3-.294-1.345-.313-.697-.302-.326-.506-1.077-.506-.251-.352-.057-.186-.42-.487-.194-.162-.376-.19-.384-.518-.553-.139-.846-.919-1.077-1.008v-.25c0-.205-.033-.21-.132-.317l-.165-.56-.115-.186-.124-1.077h.132C.19 17.453 0 17.642 0 17.26v-.379h.132v-.374c0-.32.116-.22.202-.44h.202l.05-.043-.285-.301.05-.599.177-.139.008-.305.603-1.448.309-.742.16-.012c.042-.467.587-1.066.904-1.293.235-.174.842-1.036 1.18-1.036h.136c.206 0 .227.109.268.251.19-.015.268.004.268-.189v-.25l.376-.229-.421-.85-.103-.807c-.008-.197.148-.324.148-.633V7.19H4.5V7c0-.254.062-.324.269-.374.012-.502.887-1.124 1.18-1.537.44-.618 1.25-.715 1.51-1.17.379-.008 1.641-.568 1.744-.568h.268c.149-.375 1.729-.313 2.286-.313.28 0 .169.177.606.189l.367.587.116 1.236c-.013.031-.182.989-.215 1.07-.148.39.017.78-.47.819l-.223.428c-.31.04-.227.14-.516.14h-.202c-.074.17-.28.181-.536.189l-.004-.066-1.745.035-.334.03.31-.474c-.405-.031-.714-.205-.714.096 0 .039.152.182.202.251-.314.437-.73.182-.875.692l-.404.123v.317c0 .355.004.603-.334.63l.144.181.66.066.92-.475.02-.275.438-.204.371-.108c.12.073.116.123.268.123h.269v-.25h.738c.214 0 .606.478.606.752v.568h-.136l.083.564-.013.193c0 .216-.136.093-.136.313v.19h-.132v.123l-.132.073-.004.495c0 .12-.02.112-.066.189h-.606l-.005.452-.466-.074c.042.166.066.116.066.251 0 .22-.313.062-.47.062-.124 0-.169.143-.198.24l-.676.011c-.26-.008-.128-.038-.368-.03l-.235.22c-.42.104-.928.216-.94.69l-.52.325.05.054h-.739v.128h.132c.083.112.136.108.136.25 0 .167-.099.186-.202.252 0 .379.083.433-.338.44l-.012-.63h-.256c-.338 0-.132.244-.132.507 0 .235-.046.116-.07.374l.268.074c.004.51.012 1.36-.4 1.502l.074.564-.272.077-.005.112h.203v.251c0 .232-.104.305-.203.44 0 .298.128.947-.202.947h-.202c.037.139.07.143.07.313v.88h.47l.067.128v.44h.268v-.127c.322.008.445.023.47.316l1.477.016c.074-.27.202-.324.54-.332.083-.298.446-.325.726-.638.264-.297.487-.343.685-.621.041-.024 1.048-1.163 1.16-1.302.201-.247.696-1.058 1.018-1.24l-.111-1.016.132.004c-.013-.44-.202-.247-.202-.63v-.378h.132v-.378c0-.317.115-.217.202-.44h.202l.05-.043-.285-.301.05-.6.176-.134.009-.305.606-1.449.31-.745.16-.012c.042-.463.582-1.062.9-1.294.239-.17.841-1.035 1.184-1.035h.132c.206 0 .23.112.268.255.19-.015.272 0 .272-.19v-.25l.371-.228 1.007-.305.326.332.627-.282.895.097.916-.476.024-.274.434-.204.37-.105c.124.074.12.124.269.124h.268v-.255h.743c.07 0 .16.054.251.139h.47v-.127h1.547c.26 0 .277.034.335.189h.272a.77.77 0 0 1 .338.189.298.298 0 0 0-.045.158l.095.09v.003l.008.004a.376.376 0 0 0 .099.139l.008.015a.377.377 0 0 0 .025.047.093.093 0 0 0 .012.023l.02.039a.28.28 0 0 0 .034.054.13.13 0 0 0 .012.034.43.43 0 0 0 .033.082l.012.023c.003.028.01.056.021.085.004.07.029.135.066.189l.008.015v.016c0 .062.017.12.05.174a.067.067 0 0 1 .004.023c-.058.03-.115.058-.165.085l.017.02a.269.269 0 0 0 .053.069c-.206 1.027-1.378 1.382-1.378 2.387l-.321.266-.017.301-.144.182c.012.486-.041 1.278-.26 1.58l.087.63-.017.88h.132v.568c0 .448.458.818.874.818.59 0 1.428-.9 1.75-1.657.028-.247.045-.467.053-.598.07-1.132-.074-1.437.466-2.194l.033-.71h.009l.028-.557h.091c.008-.263.02-.572.025-.9l-.025-.904-.062-.108a.734.734 0 0 0 .013-.08v-.117a.286.286 0 0 0-.017-.096.391.391 0 0 0-.029-.097.109.109 0 0 0-.004-.027l-.012-.046a.355.355 0 0 1-.008-.027c-.009-.027-.017-.054-.033-.078l-.03-.058c-.032-.073-.049-.154-.098-.22l-.033-.042c-.046-.112-.091-.22-.14-.332-.009-.031-.017-.066-.034-.097l-.057-.139H25.9l.199-.131a.21.21 0 0 0-.062-.035v-.19c0-.18-.021-.115-.137-.189l-.268-.502-.293-.34-.379-.606c-.103-.147-.334-.521-.334-.753v-.568c0-.286.9-.502 1.274-.502h.269c.8 0 1.184.116 1.596.247l.074-.363-.004-.313.207-.316c.276-.406-.042-.97.536-1.256V.953l.672-.498.404-.07 2.352-.123.998.44.074.564v.88c0 .147-.136.19-.198.44v.128h-.202v-.316h-.136c-.074.27-.136.112-.136.316l.016.394.256-.143v.63c0 .02-.31.846-.338.942h-.066l-.12.356-.206.401-.078.82c.429 0 1.6-.012 1.864-.205.186-.14 1.196-.615 1.498-.615.12-.077.115-.127.268-.127h.35l.054.568c0 1.178-1.799 1.417-2.017 1.7-.512.111-.726.196-1.09.3-.375.109-.746.267-1.13.267H31.4v-.128l-.23.012.168.305-.061.634-.145.181v.568l-.334.861.074.027-.152.174.008.32-.079-.011-.358 2.082-.108.19.009.447-.198.074-.07 1.12v.189h-.137v.25l-.074.692-.128.004-.227 2.449.025 1.074c.301.1.054.189.338.189h.334c.256 0 .735-.39 1.057-.112.104.09.206.174.305.25l-.046-1.239.145-.17-.041-.255-.293-.019.288-2.07.112-.186.313-.98-.136-.008.05-.499.198-1.193.185-.046.07-.754.137.008.012-.19c.008-.146.507-.772.623-.884.297-.293.813-.432.89-.602l.537.03.008-.127 1.543.093c.256.015.272.05.322.208l.268.016c.437.135.693.695.66 1.236l-.004.062c-.087 1.278-1.518 1.518-1.588 2.618l-.339.248-.037.297-.156.174c-.021.486-.128 1.274-.363 1.564l.04.63-.073.88.132.008-.038.564c-.028.448.405.846.821.869.743.042 1.972-1.321 2.022-2.09l.305-1.112h.107l.202-1.815.12.007c.054-.822.466-3.839-.132-4.105l.012-.19c.013-.177-.012-.115-.12-.197l-.234-.517-.273-.355-.334-.626c-.095-.155-.3-.54-.284-.773l.037-.567c.016-.286.932-.448 1.307-.425l.268.015c1.197.07 1.44.344 2.249.572.87.243 1.006 1.24 1.307 1.464l.12 1.394-.066 1.004c-.012.17-.045.17-.09.31l-.096.436c-.3.096-.334.992-.359 1.367l-.895 2.279-.288.363c-.079 1.159-.322.75-.52 1.603-.091.398-.21.32-.35.703-.096.262-.182.359-.302.687-.165.448-.458.946-.689 1.356-.24.413-.746.792-.866 1.166-.293.278-.936 1.07-1.42 1.05-.049.337-.32.364-.672.43-.198.038-.309-.004-.474.03-.227.05-.173.159-.371.147l-.607-.034-.796-.174-.507-.251c-.02-.282-.268-.27-.462-.549l-1.077-.834.07-.116-.214-.255c-.446.027-1.044-.12-1.832-.12l-.214.244c-.355.003-.532.135-.928.135l-.673.123c-.235 0-.103-.123-.338-.123h-.47v-.128c-.43 0-.714-.054-.805-.378l-.594-.514-.078-.367h-.202l-.413-.749.145-.004-.182-.185-.029-.093c-.099.043-.223.07-.355.1-.193.05-.309.016-.474.062-.223.062-.16.166-.359.166h-.606l-.805-.127-.523-.22c-.042-.282-.29-.255-.5-.522l-.111-.073a.5.5 0 0 1-.062.05Zm49.077 1.568c-.025.097-.075.213-.112.31-.012.03-.07.161-.099.177-.016.004-.008-.031-.008-.043 0-.015.025-.15-.012-.07-.017.04-.038.074-.054.117-.004.008-.045.12-.045.077.004-.073.008-.193-.05-.251-.041-.046-.103.015-.132.046-.029.035-.054.074-.082.108-.112.159 0 .31-.005.468-.004.127-.12.07-.193.035-.042-.027-.12-.085-.174-.047-.016.016-.165.186-.194.216a12.61 12.61 0 0 1-.457.468c-.083.077-.153.17-.231.24-.062.057-.1.034-.153-.02a.42.42 0 0 1-.054-.093c-.012-.027.013-.038-.029-.104-.04-.062-.095-.112-.132-.181-.012-.028-.066-.155-.099-.147-.045.007.025.15.042.174.04.065.103.108.148.17.074.088-.099 0-.14.019-.017.008-.029.035-.029.05s.008.054.012.073c.017.1.03.217.033.317v.035c-.008.096-.045.127-.107.2-.037.043-.095.109-.157.117-.033 0-.062-.016-.111-.012-.078.004-.16.07-.227.108l-.025.016c-.136.084-.276.158-.416.243-.079.05-.132.012-.202-.035-.136-.093-.273-.19-.264.062 0 .042.012.15-.046.17-.05.02-.033.046-.099.077-.02.008-.16.07-.169.058-.012-.02-.029-.035-.053-.03-.033.01-.108.046-.145.057-.099.039-.371.143-.462.147h-.033a3.153 3.153 0 0 0-.565.03c-.157.02-.322.035-.475.059-.16.027.05.046.095.054 0 .004.153.035.112.05-.02.008-.173.03-.21.039-.05.011-.07.023-.124.03-.058.008-.1.02-.157.024a10.257 10.257 0 0 1-1.386.058c-.12-.004-.111-.066-.202-.108-.116-.05-.26.088-.4.08-.19-.015-.384-.034-.57-.057-.066-.008-.12-.031-.111-.1.008-.09.153-.097.153-.16 0-.042-.132-.046-.165-.05-.112-.003-.161.028-.244.09-.19.142-.14.142-.387.08-.529-.123-1.044-.316-1.481-.625-.042-.027-.227-.162-.236-.197-.02-.077.223-.236.12-.301-.107-.066-.367.07-.483-.078-.239-.316-.408-.699-.495-1.081-.05-.236.14-.29.227-.456.037-.07.033-.135-.066-.135-.066 0-.16.012-.223-.015-.045-.024-.04-.097-.04-.143a3.943 3.943 0 0 1-.009-.255v-.016c0-.089.012-.58.037-.63.033-.073.136-.073.21-.084.046-.004.244-.02.178-.1-.083-.101-.338-.159-.326-.31 0-.054.029-.17.041-.224a6.27 6.27 0 0 1 .219-.815l-.206.054c-.124.031-.12.054-.219.112-.095.055-.276.085-.375.024-.021-.016-.05-.05-.066-.043-.046.02-.042.093-.174.131-.433.116-.866.24-1.29.387-.038.011-.108.038-.141.05-.165.042-.177-.429-.272-.44-.103-.016-.079.56-.252.66-.111.062-.322.166-.326.309v.124c0 .227.268.37.54.378.075.263 1.193 1.024 1.399 1.522.24.595.75 1.332.75 2.066.038.14.067.143.067.313v.691l-.145 1.132c-.19.077-.507.927-.71 1.151-.374.417-.416.595-.931.954-.442.305-.681.464-1.16.738-.503.29-1.229.278-1.489.432-.47 0-.994.024-1.361-.046-.417-.081-.689-.236-1.126-.27-.392-.255-.61-.236-.982-.526-.037-.03-.082-.065-.128-.104h-.247l-.673-.19-.074-.119-1.662-.363-.013-.081-4.298-.282v-.097h-1.077c-.433 0-1.963-.088-2.083.19H38.9l-.194.135-5.586.259c-.123.058-.12.108-.272.108-.202 0-.243-.027-.4-.062l-1.006.155-.198.108c-.351-.012-1.518.011-1.617.24l-1.011.127-1.609.154-.14.22-.466.004.012.07-2.021.355-.615.205-1.266.282-.008.092c-.417 0-2.067.367-2.154.568h-.334v.128c-.417 0-.64.13-.957.177-.26.035-.384-.046-.483-.008-.222.086-.028.205-.309.205h-.198c-.041.143-.017.19-.202.19h-.47l-.335.254-.606.124c-.433.008-.528.19-.94.19h-.339c-.074.173-.198.189-.47.189-.128 0-.219-.085-.404-.128v.19c0 .227-.17.189-.4.189-.372.513-1.2.228-1.345.567h-.202c-.182 0-.198.09-.268.186-.64 0-1.803.44-1.952.44h-.47l.029.062-.429.193-.342.116-1.003.135h-.672v.124l-.202.065-.875.062H5.5c-.058.035-.165.127-.202.127l-1.139-.127-1.068-.336-.438-.521-.04-.151c0-.162-.442-.769-.31-1.487.008-.035.107-1.472.107-1.595h.136v-.251h.198c.074-.301.013-.352.338-.379l.075-.25h.33c.041-.117.23-.441.4-.441h.404c.066-.17.363-.282.606-.251l.669.077c.045-.367.355-.367.606-.517l3.148-.506.012.061v-.123l2.013-.224.004-.093 2.013-.143v-.108l1.007-.077 1.076.015v-.19l3.094-.188 2.554-.062v-.135l5.309-.054h.804v-.128l2.69-.062H30.9c.272 0 .347.058.404.251.508-.007.24-.189.537-.189l.738.008 3.696-.008 2.756-.062.808-.034 3.696.162.94.062h1.882v.127l2.207.077-.041-.896.602-1.51c.264-.1.577-.73.788-.962.243-.266.722-.517.759-.927l.713-.919.161-.023c.198 0 .47-.348.47-.568v-.44c0-.549-1.064-1.418-1.076-1.889-.42-.104-.02-.313-.4-.313h-.07c-.198 0-.442.653-.508.842-.095.255-.355.823-.363.92-.482.517-.705 1.12-1.254 1.595-.264.228-.099.243-.276.432-.136.15-.219.081-.417.305-.247.279-.462.398-.742.626h-.202c-.149.525-1.28.514-1.411.815h-.202c-.31 0-.38.19-.805.19-.453 0-1.505-.02-1.761-.178-.322-.193-.825-.53-.862-.954h-.202l-.215-2.515.078.004.161-1.576c.322-.135.079-.56.248-.884l.33-1.178.742-2.094.334-.88.248-1.591.83-.615h1.748v.128h.268c.153 0 .149.05.269.127.239 0 1.138.286 1.27.383.194.146.478.772.478 1.127v.503c0 .227-.363.602-.47.757v.25l-.606 1.349-.066-.027v.189c-.26.096-.875 1.776-.875 2.201l-.268.44v.19l-.074.502h-.128v.88c0 .414.243 1.07.606 1.07h.269c.338 0 .441-.185.577-.401.276-.44.149-.213.5-.475.082-.058.758-1.02.804-1.136.029-.32.457-.741.585-1.023.091-.197.079-.375.182-.584.066-.135.31-.463.31-.533v-.63h.144l-.079-.88h-.123l-.145-1.131v-1.008c0-.22.132-.097.132-.317v-.564c.24-.081.165-.209.334-.444.178-.251.19-.19.384-.394.095-.104.759-.796.763-.8l1.007-.691c.462 0 .358-.128.672-.128h.202l-.02-.077.886-.177.075-.12 1.613-.066.672.066c.68.425 1.006.417 1.006 1.51v1.32c0 .403-.136.48-.123.905l-1.048.49-.037-.073c-.095.216-.755.178-1.139.444-.148.104-.334.14-.495.294-.222.208-.082.27-.383.46-.219.134-.38.656-.343 1.003l.145.73.462 1.074.272.653.058-.008c.194-.035.412-.096.598-.143.194-.05.396-.1.586-.158.12-.035.251-.073.367-.112.041-.016.111-.046.152-.039.161.043.231.421.314.464.07.038.07-.143.07-.178 0-.089.004-.15.02-.24.013-.096.017-.154.124-.185.044-.01.087-.022.128-.035.132-.038.12-.038.26-.034.116 0 .198-.093.318-.128l1.29-.359c.1-.193.206-.384.319-.572.049-.088.131-.092.23-.112.153-.023.339-.03.496-.038.066-.004.16.008.23.011.075.004.124.008.017-.042-.136-.066-.28-.089-.417-.135-.057-.02-.177-.066-.21-.108-.045-.05-.025-.078.008-.128.083-.116.174-.232.252-.351.029-.035.05-.07.074-.105.033-.046.045-.077.083-.123.107-.135.202-.255.313-.386a4.49 4.49 0 0 1 .272-.279.301.301 0 0 0 .033-.027 1.27 1.27 0 0 1 .157-.135c.037-.027.033-.03.075-.046.024-.008.045-.035.045.011.004.047-.079.167-.066.186.016.03.19-.15.206-.166a5.81 5.81 0 0 0 .338-.425c.079-.1.231-.32.322-.394.1-.077.202-.155.305-.228.07-.05.083-.05.157-.085.029-.011.1-.062.111-.066.046-.011-.016.09.128-.05.038-.035.12-.12.17-.127.074-.008.11.05.19-.054.09-.124.094-.166.247-.244a4.665 4.665 0 0 1 .82-.417c.153-.027.17.448.265.406.045-.02.074-.259.086-.313.025-.104.058-.27.17-.32.098-.04.226-.082.325-.12l.252-.082c.52-.162.942-.243 1.266-.243.218 0 .326.081.326.243-.272.407-.536.82-.792 1.236-.037.062-.045.116-.058.186-.008.039-.012.08-.02.12 0 .007-.025.146-.033.115l-.004-.046c0-.023 0-.042-.013-.066-.004-.007-.012-.038-.024-.034-.025.015-.03.027-.042.054-.154.26-.305.524-.453.791-.013.02-.017.028-.046.024-.02 0-.058-.012-.078-.016-.033-.008-.041-.015-.07-.027-.025-.011-.058-.03-.083-.03 0 .007.004.01.013.015.02.02.04.034.061.054.021.02.042.035.062.05.017.012.054.058.054.077 0 .012-.017.039-.02.05-.122.22-.239.44-.351.665-.017.035-.062.042-.1.054-.02.004-.053.008-.078.015-.02.004-.103.008-.115.012-.004.004-.004.004.004.008.012.007.078.019.099.023.02.004.078.015.09.03.013.008.013.024.009.04a28.688 28.688 0 0 0-.71 1.499l-.206.478c-.016.042-.045.023-.074.008a.533.533 0 0 1-.083-.043c-.033-.011-.053-.027-.086-.042h-.004c0 .007.004.011.012.019.017.02.041.042.062.062a.357.357 0 0 1 .053.062c.025.03.058.08.046.12a8.938 8.938 0 0 0-.153.386c-.008.015-.016.027-.033.034-.05.031-.16.043-.223.05-.016 0-.028 0-.049.008.008.008.008.008.02.008.025.008.054.008.083.012.029.007.136.019.136.054 0 .011-.05.143-.058.166-.078.216-.152.432-.222.652-.008.024 0 .047.004.074.004.054.004.112 0 .166 0 .02-.008.05-.017.066a.161.161 0 0 1-.05.054c-.016.011 0-.012.005-.016a.137.137 0 0 0 .02-.07c0-.003-.003-.05-.016-.042-.008.004-.012.016-.02.023-.013.031-.017.058-.034.09-.024.038-.057.069-.086.104-.017.019-.025.042-.041.061-.021.027-.038.035-.066.05a.398.398 0 0 1-.132.04c-.021.003-.14.01-.157-.005.008-.004.037-.011 0-.004-.095.012.09.02.095.02a.495.495 0 0 0 .247-.043c.013-.007.066-.046.079-.027.012.02.004.031 0 .054a8.26 8.26 0 0 0-.07.274c-.009.024-.017.04-.021.066a.723.723 0 0 1-.029.135c-.03.15-.06.298-.087.444-.012.074-.012.151-.016.22-.004.02-.004.05-.012.066a.359.359 0 0 1-.066.07c-.038.023-.038.015-.07-.008-.03-.023.008.031.012.035.012.015.029.027.05.027.049.008.04.015.036.062l-.016.158c0 .023-.02.03-.041.039a.235.235 0 0 1-.103.023.146.146 0 0 1-.054-.031c-.008-.016-.017-.027-.025-.043-.008-.011-.008-.011-.008 0 0 .016.016.062.029.074.02.027.05.05.082.058.03.004.1.02.108.05 0 .008-.009.085-.009.104v.054c-.004.05-.058.109-.09.143-.017.016-.05.047-.066.058-.013.012-.034.023-.046.039.004.004.013.004.017 0 .024-.004.05-.016.074-.023.016-.004.09-.027.103-.004v.058c0 .143.008.274.025.417.008.042.008.093.012.135 0 .023-.016.043-.012.046 0 .008.008-.004.012.012 0 .012.008.012.013.023a.274.274 0 0 0 .02.035c.013.023.017.046.025.073.014.044.029.087.045.128.017.042.087.054.128.062l.078.011c.038.004.079.004.108.031h-.025a.551.551 0 0 0-.132.02c-.017.003-.07.015-.074.034 0 .016.016.039.025.05a1 1 0 0 0 .462.398c.016.004.028.012.02.031a.295.295 0 0 1-.082.054.617.617 0 0 1-.091.027c-.033.008.004.012.016.012.087.004.14-.012.223-.035.058-.015.09-.03.145-.02.12.028.239.04.358.04.095-.005.19-.012.285-.02.05-.004.095-.015.14-.023.025-.004.075-.02.1-.016.04.004.106.035.14.012.037-.023.049-.066.09-.085a6.95 6.95 0 0 0 .198-.073c.05-.024.07-.016.124-.05a.37.37 0 0 1 .066-.043c.194-.1.367-.216.536-.348.042-.035.07-.019.12-.011.103.019.235.019.342.007.087-.007.025-.027-.016-.034a.655.655 0 0 1-.21-.062c-.042-.027-.042-.062-.005-.097.17-.15.326-.313.47-.479.042-.046.075-.054.133-.065.016-.004.094-.008.103-.02.016-.019-.1-.046-.066-.123.033-.081.086-.116.14-.178.025-.03.05-.058.074-.089.112-.154.219-.313.318-.475.016-.023.025-.035.058-.03.037.003.082.038.107.061.041.039.07.066.115.1.03.024.054.04.079.062.103.081-.066-.127-.066-.135-.017-.023-.037-.062-.054-.089-.025-.05-.099-.17-.074-.228a.197.197 0 0 1 .02-.042l.1-.17.008-.008a.294.294 0 0 1 .057-.007c-.004-.004-.016-.004-.024-.008-.004 0-.02 0-.02-.008l.003-.012c.03-.05.037-.073.095-.104a.26.26 0 0 1 .153-.015c.037.008.062.011.099.02.041.003.07.01.107.018.095.024-.017-.042-.033-.054-.041-.023-.074-.03-.115-.061-.025-.02-.104-.07-.116-.093-.016-.027.008-.02 0-.039-.004-.011.008-.027.017-.038.057-.106.114-.213.169-.321.004-.008.004-.008.012-.008.012.004.02.012.029.02.004 0 .008 0 .004-.004a.044.044 0 0 1-.008-.012c-.004-.004-.008-.008-.008-.015-.005-.004-.009-.008-.009-.016 0-.004.008-.015.008-.023.22-.42.425-.85.623-1.278a7.556 7.556 0 0 1-1.064-1.468c-.058-.104-.099-.209-.153-.317a3.487 3.487 0 0 1-.247-.556c-.074-.212.041-.154.008-.297-.02-.093-.103-.236-.144-.329a1.658 1.658 0 0 1-.136-.417 6.294 6.294 0 0 1-.058-.463c-.004-.027-.017-.132.012-.147.058-.031.186.066.12-.131-.033-.105-.07-.182-.116-.278-.049-.116-.037-.136-.033-.255.005-.12.017-.44.058-.522.037-.073.062-.066.062-.166 0-.123-.02-.139.013-.278a3.06 3.06 0 0 1 .544-1.159c.173-.22.38-.417.627-.568.09-.053.144 0 .198.066.041.054.07.105.12.162.016.016.078.097.103.1.02 0 .012-.007.012-.03-.004-.066-.037-.127-.037-.205-.008-.162.05-.305.235-.347l.041-.008c.083-.016.174-.015.264-.031.149-.023.145-.023.297-.008.05.008.083.008.132.004.12-.008.149-.011.277.008a.281.281 0 0 1 .082.02c.124.076.14.23.33.17.182-.059.215-.055.392.015.066.023.112.038.128.1.017.054.054.058.103.089.132.08.305.224.396.347.12.17.136.248.17.448.008.043.032.248.049.27.025.036.025-.111.062-.13.041-.016.029-.008.062-.035.066-.054.099.015.132.07.239.42.4.934.462 1.401.02.147.024.29.05.437.02.146.028.374.011.525-.012.128-.032.174-.074.29-.016.042-.066.15-.02.185.033.027.04.027.066.07.037.065.012.197.008.274a9.198 9.198 0 0 1-.202 1.294 7.262 7.262 0 0 0 1.46-1.6c-.313-.136-.55-.317-.71-.544a1.236 1.236 0 0 1-.235-.714c0-.275.442-.445.566-.75.12-.305-.108-.726.09-1.02.186-.281.388-.552.607-.81.012-.016.033-.047.053-.05.03-.004.095.046.116.065.045.03.07.081.111.112.013.004.013.008.025.008-.004-.012-.004-.012-.012-.023-.013-.024-.021-.05-.033-.074-.025-.05-.079-.135-.087-.185-.013-.054 0-.058.037-.097.045-.05.165.004.215-.046.016-.02-.034-.155-.017-.17.045-.043.128.062.173.058.058-.012-.053-.155-.025-.209.009-.011.215.352.236.333.016-.016.004-.564.02-.572.058-.02.12.116.157.092.025-.019-.016-.135-.02-.166-.009-.034-.009-.046.02-.073l.202-.166.004-.004.083-.085c.012-.015-.079.29-.058.286.041-.008.252-.228.285-.2.016.018.045.057.066.072.004.008.008.012.008.004.004-.007-.012-.046-.017-.054-.028-.065-.094-.173-.099-.243 0-.027 0-.043.021-.062a4.16 4.16 0 0 1 .252-.208c.02-.016.099-.074.115-.082.05-.019.194.05.24.078.02.011.086.05.107.058.004 0 .016.007.012-.004-.004-.008-.09-.093-.103-.108-.029-.027-.12-.108-.095-.143.008-.012.24-.166.272-.19a.207.207 0 0 1 .07-.05 3.16 3.16 0 0 1 .112-.054h.004a6.39 6.39 0 0 0 .103-.023c.029-.008.062-.02.09-.023.05-.008.038.062.063.062.012 0 .057-.05.07-.062a.197.197 0 0 1 .12-.062.615.615 0 0 1 .09-.023c.037-.004.037.039.041.066 0 .019 0 .077.034.034.024-.027.04-.058.066-.085.04-.046.053-.054.12-.054.049 0 .053 0 .102.02.02.003.033.007.054 0a.134.134 0 0 1 .033-.008c.053-.012.074.054.078.093.008.038.004.1.046.023.037-.062.045-.112.14-.09a.923.923 0 0 1 .202.086c.041.03.008.081-.008.112-.004.011-.013.02-.008.03.032.008.099-.03.148-.015.029.012.05.05.062.074.135.216-.1.64-.706 1.274.025 0 .054-.004.079-.004.041-.003.058.04.07.07.012.023.016.035.037.008.037-.054.046-.097.12-.105.145-.02.29-.043.433-.07.045-.01.062-.018.107.005.066.034.058-.035.128-.05.09-.02.223.127.313.111.17-.034.302-.227.475-.258.02-.004.132-.023.144-.023.033.007.095.057.116.057.02.004.025-.03.029-.046a.12.12 0 0 1 .066-.05c.255-.043.52.108.767.046.404-.104.557-.274.932-.32l.128-.016c.144-.019.31-.046.458-.046.029 0 .095-.004.124.004.041.004 0 .054-.008.07a.064.064 0 0 0-.013.023c.004.011-.004.007-.004.011.012.004.07-.02.087-.027.04-.015.127-.05.173-.05.062 0 .132.004.198.011.033.006.066.01.099.012.276.027.57.039.841.089.079.015.182.038.252.065.033.008.025.047.02.07-.003.035-.003.066-.008.1 0 .027 0 .047-.004.074 0 .011-.008.058-.004.07 0 .007 0 .01.004.007a.845.845 0 0 0 .062-.12.16.16 0 0 1 .05-.073c.024-.023.053-.058.09-.039.24.135.384.332.475.58l.008.03c.008.031.025.024.037.055.008.023-.008.07.013.038.024-.034.02-.015.028-.011.004.004.037-.035.037-.039.009-.008.03-.05.033-.046.005.011-.02.062-.024.077-.013.02-.02.066-.025.085-.004.03.004.027.004.05.008.1.014.201.017.301.004.143.012.29.012.433 0 .041-.001.082-.004.124 0 .015-.004.057 0 .07 0 .007.012.034.016.038.025.007.136-.074.161-.085.05-.027.017.004.004.02-.037.045-.078.092-.107.138a.712.712 0 0 0-.045.074c-.025.042-.058.092-.066.142-.046.27-.132.533-.268.78-.017.028-.042.059-.054.09-.017.03-.02.03.012.038.03.008-.008.023.037.015.038-.003.075-.019.116-.023.004 0 .02-.007.017 0-.005.004-.062.031-.07.035-.034.02-.063.035-.1.054-.05.031-.09.066-.136.104a.84.84 0 0 0-.132.105 7.199 7.199 0 0 1-.56.58c-.034.034-.298.27-.318.281-.025.012-.075-.011-.1-.023a.425.425 0 0 1-.119-.058.251.251 0 0 0-.062-.035c.008.02.037.046.054.062.016.02.07.066.074.085a.312.312 0 0 1-.008.085c-.008.03-.025.039-.05.058a82.27 82.27 0 0 0-.515.37c-.017.012-.038.032-.058.032-.041.003-.058-.008-.09-.024-.03-.015-.042-.027-.063-.046-.016-.012-.033-.035-.058-.03a.574.574 0 0 0 .038.069c.024.046.029.046.029.1 0 .02-.71.043-.73.058-.178.131.35.255.177.39-.079.062-.165.17-.272.305-.091.112-.174.224-.252.34-.013.016-.037.058-.05.066-.037.02-.086.008-.123 0-.042-.008-.075-.02-.112-.027-.016-.004-.041-.012-.053-.012-.009-.004-.017-.004-.017.004.004.004.074.054.083.062a.821.821 0 0 1 .09.073c.02.02.042.05.03.081a19.85 19.85 0 0 0-.417.811 3.64 3.64 0 0 0-.182.49 3.615 3.615 0 0 0-.062.29c-.004.032-.033.059-.058.074-.066.039-.136.07-.198.108-.008.004-.07.043-.033.039.033-.004.075-.02.112-.027.053-.008.066-.012.12-.004.028.008.049.011.049.038a.813.813 0 0 0 .16.437c.026.027-.012.035-.028.05-.012.016-.037.02-.058.02-.033.007-.177.003-.058.03.07.02.14.031.21.05.046.012.166.012.162.055-.087.726.21.691.701.154.19-.208.664-.108 1.126-.324.46-.217.943-.483 1.452-.8l.05-.03c.016-.008.04-.028.057-.028.013 0 .021-.004.025-.004.013.004-.008.047-.012.054-.004.008-.004.008 0 .016 0 .011-.03.05-.033.062-.008.03.107-.085.115-.097.013-.011 0 0-.016.016l.177-.194c.029-.027.037-.034.066-.057.041-.031.029.34.066.312.09-.065.227-.533.314-.598.082-.066.165-.128.243-.193a.012.012 0 0 0 .008-.004c.009.02.02.05.033.085-.004-.039-.012-.074-.012-.1.003-.003.001-.006-.004-.008-.004-.039-.004-.066-.004-.066.033-.023.074-.05.107-.07.029-.015.066-.03.095-.046a.764.764 0 0 0 .136-.077l.115-.097c.196-.16.384-.324.566-.494.181-.17.332-.334.453-.49l.29 1.29a31.17 31.17 0 0 1-1.828 1.95c-.784.768-1.646 1.522-2.566 2.132l-.136.089c-.4.258-.817.502-1.25.706-.017.012-.046.028-.066.024-.046-.004-.05-.124-.054-.155 0-.023 0-.07-.004-.089 0-.007 0-.015-.008-.011-.008.008-.02.054-.025.066a2.62 2.62 0 0 1-.045.17c-.013.042-.025.1-.075.12-.536.227-1.122.405-1.72.409-.107 0-.185-.476-.288-.483-.38-.031-.76.336-1.073.112a.683.683 0 0 1-.087-.062c-.028-.023.013-.05.021-.073.004-.02-.054-.027-.066-.027-.033-.008-.078-.016-.107-.035-.025-.016-.037-.062-.05-.085-.008-.031-.016-.05-.02-.081-.009-.035-.013-.062-.021-.097a.462.462 0 0 1-.004-.077c0-.016 0-.05-.004-.062-.025.023-.05.128-.062.162-.004.012-.012.043-.029.035-.025-.011-.029-.02-.041-.038l-.103-.151c-.038-.058-.075-.116-.108-.174a.91.91 0 0 1-.05-.085 4.295 4.295 0 0 1-.412-1.193v-.17c-.024-.023-.037-.047-.037-.07v-.07c0-.293.054-.61.161-.95.11-.342.25-.683.42-1.023l.145-.263c.025-.042.054-.096.087-.135.025-.035.037-.07.058-.104a.198.198 0 0 0 .02-.031c.013-.02.02-.043.046-.043.07-.007.169.055.23.085.025.012.058.039.079.039a.299.299 0 0 0-.074-.085.792.792 0 0 1-.136-.15c-.017-.024-.025-.035-.009-.058a6.69 6.69 0 0 1 .252-.364c.008-.011.025-.038.037-.046.029-.011.107.039.132.058.037.027.07.05.116.077l.037.02c.008.007.012.011.012 0 0-.012-.062-.074-.07-.085a.818.818 0 0 1-.111-.19c-.004-.023-.009-.034.004-.05.09-.116.173-.228.264-.34.012-.015.025-.042.05-.038.028.007.057.1.07.127.012.035.032.097.028.008A2.372 2.372 0 0 1 77.26 16c.004-.058 0-.14.037-.186.132-.162.268-.323.409-.482.033-.042.067-.083.103-.124.008-.008.024-.03.037-.027.05.004.103.166.115.209 0 .011.005.019.013.023a.76.76 0 0 0 0-.193c0-.043-.004-.093-.004-.136 0-.03 0-.054.02-.077.054-.061.108-.12.161-.177.054-.058.111.034.136.07.025.038.041.076.062.115.033.058.025.02.017-.012-.009-.05-.017-.1-.03-.15a.722.722 0 0 1-.02-.162.132.132 0 0 1 .033-.074 12.4 12.4 0 0 1 .52-.51v-.034c-.05.007-.098.016-.144.027-.021.003-.062.015-.07-.012-.013-.043.04-.116.065-.15.013-.024.054-.07.058-.09-.033.004-.157.12-.186.151-.045.046-.086.112-.14.147-.02.011-.057.015-.082.02-.037.007-.058-.016-.075-.04-.008-.011-.024-.046-.037-.042-.024 0-.04.112-.12.124l-.886.17c-.017.004-.046.015-.058 0-.012-.02.008-.054.02-.07.017-.023.083-.116.087-.131.005-.008.005-.012-.004-.004-.012.004-.086.062-.107.077l-.157.124a.322.322 0 0 1-.144.077c-.107.02-.219.043-.33.062-.041.01-.084.02-.128.027-.02.004-.037.011-.045-.012a.141.141 0 0 1 .012-.1c.012-.031.029-.054.037-.089-.008-.004-.004-.004-.012.004-.033.03-.066.054-.095.089-.041.042-.066.089-.103.127-.03.027-.03.027-.066.035-.433.089-.867.185-1.287.293a3.02 3.02 0 0 1-.219.367c-.07.1-.103.159-.206.228-.083.054-.066.039-.083.132-.033.24-.383.29-.581.32-.165.027-.285.058-.066.166.078.039.169.07.09.159a4.602 4.602 0 0 0-.111.123c-.066.07-.107.135-.202.17-.111.039-.396.023-.487.062-.111.05.268.124.21.259a.816.816 0 0 1-.082.085c-.082.077-.103.112-.004.197.029.027.264.17.169.212-.041.023-.28 0-.342 0-.12-.008-.285.016-.372.104-.12.124-.235.26-.354.387-.058.058-.149.15-.21.204-.124.105-.343-.181-.434-.185h-.012c-.062.012-.004.166.008.2.02.07.078.213-.012.256-.05.027-.174-.008-.227-.02-.384-.061-.017.174-.1.286-.016.027-.288.197-.333.224l-.017.027c-.14.22-.326.236-.487.44-.099.12-.21.248-.33.375 0 .081.025.17.005.251-.03.128-.075.26-.112.387a2.5 2.5 0 0 1-.016.065Zm13.13-2.564Zm.89-.757c0 .002.002.005.005.007a.087.087 0 0 1-.02.016.062.062 0 0 1-.005-.02h.013l.008-.003Zm.017.108c.037.204.108.506.178.475.008-.004-.112-.302-.178-.475Zm-.037-.105c-.02.004-.008 0-.004-.011l.004.011Zm-64.756-5.99c-.264-.008-.132-.043-.371-.031l-.235.22c-.42.104-.928.216-.94.691l-.516.325.045.054h-.738v.124h.132c.082.115.136.112.136.25 0 .17-.095.19-.202.256 0 .378.082.428-.335.44l-.016-.63h-.252c-.342 0-.136.24-.136.502 0 .236-.045.12-.066.379l.264.07c.004.513.013 1.363-.4 1.502l.074.568-.272.077-.004.112h.202v.251c0 .232-.103.305-.202.44 0 .294.128.943-.202.943h-.202c.037.143.07.146.07.317v.88h.47l.066.124v.44h.268v-.124c.322.008.446.024.47.313l1.482.02c.07-.275.202-.325.536-.333.057-.204.247-.282.453-.413l.867-4.051.132-.178-.054-.255-.297-.004.153-2.082.095-.189.247-.997h-.132v-.023l-.59.012Zm.47 7.006c-.103.012-.107.031-.04.043l.04-.043Zm49.118-3.704v-.324c-.004-.043.041-.058.079-.031.037.03.103.131.132.174.053.08 0-.062-.005-.074-.02-.05-.04-.104-.066-.15-.033-.078-.074-.097-.127-.155-.03-.03-.025-.054-.025-.093a8 8 0 0 0-.07-.764c-.004-.031 0-.047.024-.066.038-.027.079-.035.12-.054a.26.26 0 0 0 .07-.043c-.008-.011-.016-.011-.033-.011-.053-.004-.053 0-.107-.02-.05-.011-.112-.038-.124-.088-.012-.039-.016-.078-.029-.116-.053-.224-.136-.479-.28-.672-.041-.054-.054-.097-.116-.046-.078.065-.194-.02-.26-.062-.173-.112-.214-.174-.408-.047-.149.097-.256.255-.334.406-.074.147-.12.278-.161.432-.029.109-.153.337-.124.433.017.066.037.046.037.135 0 .108-.008.22-.008.329-.004.073-.02.092-.078.139-.132.1-.326.2-.054.305.066.023.14.042.149.12.012.108.02.212.037.32.053.406.14.773.251 1.163.046.166-.103.266-.094.425 0 .023.008.162.053.15.046-.011.1-.147.173-.089.025.023.037.09.046.124.025.077.045.116.058.197.016.093.016.181.094.25.087.078.075.086.124.19l.004.012c.05.108.046.127.05.24 0 .119.004.17.128.223.103.043.103.074.156.162.083.132.17.26.264.383.075-.29.14-.591.198-.885.009-.042.009-.038-.008-.077-.008-.023.004-.035-.008-.054-.013-.015.025-.058-.074.027-.07.058-.021-.004.004-.03a.57.57 0 0 0 .111-.167c.012-.035.033-.066.05-.104a.415.415 0 0 0 .053-.209c-.004-.046-.004-.174.03-.208.036-.043.148-.074.164-.09.008-.007 0-.01-.008-.019-.037-.019-.144-.034-.144-.08v-.008c0-.031.004-.062.008-.09l.012-.13a.25.25 0 0 1 .017-.097.211.211 0 0 1 .099-.097c.033-.011.078.012.045-.038s-.087-.043-.12-.081c-.016-.024-.008-.054-.008-.081.022-.296.033-.593.033-.889Zm2.81 8.277c.42-.336 1.266-1.556 1.596-1.595.099-.011.26.124.28.27l.02.147c.063.46-.177.247-.23.711l-1.807 2.182-.936.87c-.994.602-1.692 1.336-3.272 1.521l.021.15-.71.159-3.353.32-1.613.024-.252-.116-1.588.29-.4.03c-.186.02-.247-.023-.268-.197-.054-.378.627-.587.524-1.502l.322-.378.825-.136 1.282-.065c.157.065.161.123.339.104l.478-.058.02.15 1.931-.057.797-.116c.89-.104 1.571-.298 2.305-.545.925-.309 1.094-.58 1.795-.846.78-.47 1.204-.764 1.893-1.317ZM45.718 8.643l-.075 1.893-.33-.004c-.243 0-1.142-.502-1.328-.645-.264-.205-.643-.835-1.023-.927l-.202-.568c-.037-.147-.198-.668-.198-.753v-.757c0-.51.173-.653.198-.943.874 0 1.848.924 2.083.943l.322.606c.334.217.322.815.553 1.155ZM86.14 3.418V.645h1.312c.264 0 .465.025.603.077a.644.644 0 0 1 .33.262c.08.127.12.266.12.418a.674.674 0 0 1-.203.498c-.135.134-.345.219-.631.255.104.049.184.095.24.139.112.098.22.221.321.37l.512.754h-.487l-.392-.576a6.256 6.256 0 0 0-.28-.382.994.994 0 0 0-.203-.186.551.551 0 0 0-.177-.073 1.672 1.672 0 0 0-.219-.015h-.454v1.232h-.391Zm.392-1.55h.842c.179 0 .319-.016.42-.05a.436.436 0 0 0 .158-.74c-.102-.083-.263-.124-.483-.124h-.936v.915Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default SmallLogo;
