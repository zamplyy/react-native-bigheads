import React from 'react'
import { useTheme } from '../../themeContext'
import { ClothingProps } from './types'
import { Path, G, Circle } from 'react-native-svg'

export const DenimJacket = ({ color }: ClothingProps) => {
  const { colors, skin } = useTheme()

  const { base, shadow } = colors.clothing[color]

  return (
    <G>
      <Path
        d="M544.85 848.98L502.72 814.61L577.35 759.82H416.65L491.28 814.61L449.15 848.98L411.52 792.48V870.96H585.78V787.52L544.85 848.98Z"
        fill={skin.shadow}
      />
      <Path
        d="M613.66 759.16L570.93 759.26C570.709 763.777 570.232 768.277 569.5 772.74C569.03 774.882 568.449 776.998 567.76 779.08C565.42 785.57 550.5 791.08 546.27 795.81C544.869 797.383 543.366 798.863 541.77 800.24L452.29 799.66C449.669 797.371 447.286 794.821 445.18 792.05C440.95 786.49 428.78 780.46 427.08 773.11C426.598 770.935 426.238 768.735 426 766.52C425.759 764.261 425.639 761.991 425.64 759.72L380.43 759.16C376.91 759.16 373.534 760.558 371.044 763.046C368.553 765.534 367.153 768.91 367.15 772.43V1057.12C367.153 1060.64 368.553 1064.02 371.044 1066.5C373.534 1068.99 376.91 1070.39 380.43 1070.39H619.36C622.88 1070.39 626.255 1068.99 628.744 1066.5C631.232 1064.01 632.63 1060.64 632.63 1057.12V779C632.63 766.82 626.75 759.16 613.66 759.16Z"
        fill={base}
      />
      <Path
        d="M609.84 759.16C673.38 759.16 698.36 802.55 688.74 1031.16C670 1037.86 632.83 1035.75 632.83 1035.75L609.84 759.16Z"
        fill={base}
      />
      <Path
        d="M448 818.5L496.51 800.93L545.09 818.5L508.03 786.5L464.14 787.33L448 818.5Z"
        fill={shadow}
      />
      <Path
        d="M632.63 832.31C632.63 832.31 609.84 916.85 613.32 1066.31L646.53 1035.31L650.11 897.73C644.49 825.5 632.63 832.31 632.63 832.31Z"
        fill={shadow}
      />
      <Path
        d="M386 759.16C324.22 759.16 297.12 815.61 305.25 1004.64C327.67 1014.55 361.44 1010.22 361.44 1010.22L386 759.16Z"
        fill={base}
      />
      <Path
        d="M303.94 958.49C304.113 972.13 304.517 986.623 305.15 1001.97C320.42 1002.7 348.84 1002.85 362.26 1001.97L366.44 959.16C355.67 957.9 320.66 957.49 303.94 958.49Z"
        fill={shadow}
      />
      <Path
        d="M367.12 832.31L366.62 1010L353.27 1010.9C350.3 861.85 367.12 832.31 367.12 832.31Z"
        fill={shadow}
      />
      <Path
        d="M609.84 759.16C677.26 759.16 688.29 815.44 688.74 892.94V1031.16C688.74 1031.16 638.74 1036.69 632.83 1035.75L632.73 893.64"
        fill="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <Path
        d="M386 759.16C360.27 759.16 342.48 767.28 330.29 781.6C310.84 804.47 305.66 843.14 305.29 889.87V1013.64C317.35 1016.96 366.65 1010 366.65 1010L367.14 891.4"
        fill="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <Path
        d="M369.6 1012.24C367.77 1014.85 295.83 1014.16 294.93 1012.24C294.03 1010.32 292.74 974.74 294.93 971.24C296.73 968.36 367.04 968.97 369.6 971.24C372.16 973.51 371.43 1009.63 369.6 1012.24Z"
        fill={shadow}
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <Path
        d="M380.43 1070.39H497C387.81 1070.39 396.09 839.25 367.11 839.25V1057.12C367.112 1058.87 367.457 1060.6 368.128 1062.21C368.798 1063.82 369.78 1065.29 371.018 1066.52C372.255 1067.75 373.723 1068.73 375.338 1069.39C376.954 1070.06 378.684 1070.4 380.43 1070.39Z"
        fill={shadow}
      />
      <Path
        d="M342.5 770.5C361.3 792.5 366.767 840.193 367.15 861.29V886C366.89 921.44 366.89 956.44 367.15 991.3V1057.1C367.153 1060.62 368.553 1064 371.043 1066.48C373.533 1068.97 376.91 1070.37 380.43 1070.37H619.36C622.879 1070.37 626.255 1068.97 628.743 1066.48C631.232 1063.99 632.63 1060.62 632.63 1057.1V989.69C632.63 986.88 632.63 984.03 632.63 981.16C632.89 947.4 632.89 912.4 632.63 878.4V870.4C632.63 840 628.743 792.5 654 770.5"
        fill="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        d="M694.42 971.24C696.64 973.5 696.01 1009.63 694.42 1012.24C692.83 1014.85 630.42 1014.16 629.65 1012.24C628.88 1010.32 627.75 974.74 629.65 971.24C629.92 970.74 631.93 970.35 635.1 970.06"
        fill={shadow}
      />
      <Path
        d="M694.42 971.24C696.64 973.5 696.01 1009.63 694.42 1012.24C692.83 1014.85 630.42 1014.16 629.65 1012.24C628.88 1010.32 627.75 974.74 629.65 971.24C629.92 970.74 631.93 970.35 635.1 970.06"
        fill="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <Path
        d="M675.92 969.3C679.72 969.6 690.92 968.12 691.34 968.54Z"
        fill="black"
      />
      <Path
        d="M675.92 969.3C676.502 968.543 677.13 967.821 677.8 967.14C678.345 966.595 678.941 966.102 679.58 965.67C680.155 965.288 680.761 964.954 681.39 964.67C682 964.38 682.61 964.13 683.22 963.88C684.449 963.383 685.716 962.988 687.01 962.7C687.669 962.554 688.337 962.451 689.01 962.39C689.37 962.39 689.74 962.39 690.18 962.39C690.43 962.39 690.64 962.39 691 962.39C691.12 962.39 691.44 962.39 691.71 962.46H692.06L692.55 962.57L692.8 962.63L693 962.69L693.57 962.9C694.317 963.226 694.996 963.691 695.57 964.27L699.77 968.56L691.12 977.04L687 972.67C687.54 973.236 688.19 973.685 688.91 973.99C689.09 974.07 689.27 974.13 689.45 974.19H689.62L689.81 974.24C689.934 974.281 690.061 974.311 690.19 974.33H690.38C690.48 974.33 690.64 974.33 690.6 974.33C690.56 974.33 690.53 974.33 690.45 974.33H689.7C689.13 974.33 688.51 974.33 687.88 974.33C686.562 974.252 685.251 974.075 683.96 973.8C683.29 973.65 682.62 973.5 681.96 973.31C681.274 973.127 680.605 972.886 679.96 972.59C679.215 972.237 678.516 971.794 677.88 971.27C677.119 970.73 676.456 970.064 675.92 969.3V969.3Z"
        fill={colors.outline}
      />
      <Path
        d="M589.51 764.64L513.36 805.62L555.5 822.5L616.4 764.59L589.51 764.64Z"
        fill={shadow}
      />
      <Path
        d="M380.43 759.26L613.66 759.16"
        fill="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        d="M497.04 789V1070.39"
        fill="none"
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <Path
        d="M416.62 759.8C416.62 759.8 459.89 769.53 491.28 785C476 810.21 449.15 812.5 449.15 812.5L389.72 759.77L416.62 759.8Z"
        fill={base}
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        d="M577.38 759.8C577.38 759.8 538 771.39 502.72 785C512.72 805.28 544.85 812.5 544.85 812.5L604.28 759.75L577.38 759.8Z"
        fill={base}
        stroke={colors.outline}
        strokeWidth="12"
        strokeMiterlimit="10"
      />
      <Path
        d="M635.1 970.06C642.61 969.35 656.61 969.17 669.1 969.39Z"
        fill="black"
      />
      <Path
        d="M634.54 964.08C637.468 963.667 640.425 963.51 643.38 963.61C646.28 963.68 649.16 963.91 652.04 964.26C653.47 964.44 654.91 964.63 656.34 964.87C657.784 965.081 659.215 965.365 660.63 965.72C663.65 966.455 666.524 967.696 669.13 969.39C666.486 970.986 663.613 972.167 660.61 972.89C659.2 973.25 657.79 973.52 656.38 973.75C654.97 973.98 653.57 974.22 652.17 974.44C649.37 974.86 646.58 975.22 643.82 975.44C641.06 975.66 638.3 975.94 635.66 975.98L629.66 976.08L628.66 964.95L634.54 964.08Z"
        fill={colors.outline}
      />
      <Path
        d="M424 907C424 909.209 425.791 911 428 911C430.209 911 432 909.209 432 907H424ZM432 922C432 919.791 430.209 918 428 918C425.791 918 424 919.791 424 922H432ZM424 933C424 935.209 425.791 937 428 937C430.209 937 432 935.209 432 933H424ZM432 948C432 945.791 430.209 944 428 944C425.791 944 424 945.791 424 948H432ZM424 959C424 961.209 425.791 963 428 963C430.209 963 432 961.209 432 959H424ZM432 974C432 971.791 430.209 970 428 970C425.791 970 424 971.791 424 974H432ZM424 985C424 987.209 425.791 989 428 989C430.209 989 432 987.209 432 985H424ZM405 849V882.5H413V849H405ZM405 882.5C405 887.718 406.822 892.566 411.002 896.021C415.071 899.384 420.86 901 428 901V893C421.94 893 418.229 891.616 416.098 889.854C414.078 888.184 413 885.782 413 882.5H405ZM428 901C434.989 901 441.06 899.721 445.489 896.63C450.149 893.379 452.5 888.464 452.5 882.5H444.5C444.5 886.136 443.201 888.471 440.911 890.07C438.39 891.829 434.211 893 428 893V901ZM452.5 882.5V849H444.5V882.5H452.5ZM405 849C405 861.099 414.882 872 428 872V864C419.518 864 413 856.901 413 849H405ZM428 872C440.648 872 452.5 862.053 452.5 849H444.5C444.5 856.947 436.952 864 428 864V872ZM413 849V846H405V849H413ZM452.5 849V846H444.5V849H452.5ZM447.5 841H410V849H447.5V841ZM424 897V907H432V897H424ZM424 922V933H432V922H424ZM424 948V959H432V948H424ZM424 974V985H432V974H424ZM452.5 846C452.5 843.239 450.261 841 447.5 841V849C445.843 849 444.5 847.657 444.5 846H452.5ZM413 846C413 847.657 411.657 849 410 849V841C407.239 841 405 843.239 405 846H413Z"
        fill={colors.outline}
      />
      <Circle cx="428" cy="858" r="3" fill={colors.outline} />
      <Circle cx="457" cy="791" r="5" fill={colors.outline} />
      <Circle cx="537" cy="791" r="5" fill={colors.outline} />
      <Path
        d="M561 907C561 909.209 562.791 911 565 911C567.209 911 569 909.209 569 907H561ZM569 922C569 919.791 567.209 918 565 918C562.791 918 561 919.791 561 922H569ZM561 933C561 935.209 562.791 937 565 937C567.209 937 569 935.209 569 933H561ZM569 948C569 945.791 567.209 944 565 944C562.791 944 561 945.791 561 948H569ZM561 959C561 961.209 562.791 963 565 963C567.209 963 569 961.209 569 959H561ZM569 974C569 971.791 567.209 970 565 970C562.791 970 561 971.791 561 974H569ZM561 985C561 987.209 562.791 989 565 989C567.209 989 569 987.209 569 985H561ZM542 849V882.5H550V849H542ZM542 882.5C542 887.718 543.822 892.566 548.002 896.021C552.071 899.384 557.86 901 565 901V893C558.94 893 555.229 891.616 553.098 889.854C551.078 888.184 550 885.782 550 882.5H542ZM565 901C571.989 901 578.06 899.721 582.489 896.63C587.149 893.379 589.5 888.464 589.5 882.5H581.5C581.5 886.136 580.201 888.471 577.911 890.07C575.39 891.829 571.211 893 565 893V901ZM589.5 882.5V849H581.5V882.5H589.5ZM542 849C542 861.099 551.882 872 565 872V864C556.518 864 550 856.901 550 849H542ZM565 872C577.648 872 589.5 862.053 589.5 849H581.5C581.5 856.947 573.952 864 565 864V872ZM550 849V846H542V849H550ZM589.5 849V846H581.5V849H589.5ZM584.5 841H547V849H584.5V841ZM561 897V907H569V897H561ZM561 922V933H569V922H561ZM561 948V959H569V948H561ZM561 974V985H569V974H561ZM589.5 846C589.5 843.239 587.261 841 584.5 841V849C582.843 849 581.5 847.657 581.5 846H589.5ZM550 846C550 847.657 548.657 849 547 849V841C544.239 841 542 843.239 542 846H550Z"
        fill={colors.outline}
      />
      <Circle cx="565" cy="858" r="3" fill={colors.outline} />
    </G>
  )
}