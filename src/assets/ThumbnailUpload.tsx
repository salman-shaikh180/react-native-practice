import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ThumbnailUpload = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    fill="none"
    {...props}>
    <Path
      fill="#76BC3F"
      d="M39.349 8.683a1.436 1.436 0 0 1-2.032 0l-1.38-1.379v8.03a1.437 1.437 0 1 1-2.875 0v-8.03l-1.38 1.379a1.438 1.438 0 1 1-2.031-2.032l3.833-3.833c.013-.014.03-.018.044-.031.123-.119.265-.214.422-.282h.036c.145-.055.299-.086.454-.09h.146c.12.008.24.031.355.069.05.017.095.03.143.052.158.068.302.164.426.283l3.833 3.834a1.435 1.435 0 0 1 .006 2.03Z"
    />
    <Path
      fill="#9E9E9E"
      d="M11.98 15.333a5.27 5.27 0 1 0 10.54 0 5.27 5.27 0 0 0-10.54 0Zm7.666 0a2.396 2.396 0 1 1-4.793 0 2.396 2.396 0 0 1 4.793 0Zm22.52 2.396a1.437 1.437 0 0 0-1.437 1.438v4.345l-.75-.642a5.704 5.704 0 0 0-7.283 0l-7.971 6.838a2.843 2.843 0 0 1-3.534 0l-.639-.548a5.71 5.71 0 0 0-6.796-.366l-7.914 5.323a21.467 21.467 0 0 1-.575-5.367v-11.5C5.27 8.406 8.407 5.27 17.25 5.27h7.667a1.438 1.438 0 0 0 0-2.874H17.25C6.837 2.396 2.396 6.839 2.396 17.25v11.5c0 10.411 4.44 14.854 14.854 14.854h11.5c10.413 0 14.854-4.443 14.854-14.854v-9.583a1.438 1.438 0 0 0-1.437-1.438Zm-13.416 23h-11.5c-5.284 0-8.518-1.133-10.275-3.92l8.381-5.623a2.86 2.86 0 0 1 3.322.161l.638.548a5.704 5.704 0 0 0 7.283 0l7.976-6.842a2.84 2.84 0 0 1 3.538 0l2.62 2.248v1.449c-.004 8.843-3.14 11.98-11.983 11.98Z"
    />
  </Svg>
);
export default ThumbnailUpload;
