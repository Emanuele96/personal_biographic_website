import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { AppBar } from "@material-ui/core/";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link
            activeClass="active"
            to="lllo"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            <Typography variant="h6" className={Typography.styles}>
              News
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <div id="hello">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vitae purus id quam tempus tincidunt ac egestas nibh. Curabitur
          feugiat massa sed ante sollicitudin, a vestibulum risus viverra. Duis
          ut vestibulum lectus. Aliquam laoreet sagittis nulla, eu feugiat magna
          luctus quis. Maecenas interdum egestas purus, id sodales nunc
          tincidunt eget. Quisque blandit lacinia est egestas facilisis. Sed
          arcu nisi, consectetur rhoncus sapien et, venenatis laoreet arcu. In
          vel eros mauris. Nulla ut efficitur purus. Aenean neque sem, finibus
          vitae velit ut, rutrum imperdiet ligula. In sollicitudin elit a ex
          dictum, nec euismod dui ultrices. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Curabitur porta sed neque non ornare. Aliquam viverra gravida
          ex ut viverra. Mauris et volutpat erat, quis mollis elit. Nunc
          eleifend, metus ac eleifend suscipit, orci velit maximus augue, ac
          faucibus ipsum sem laoreet dolor. Cras iaculis quis risus eget
          laoreet. Mauris est purus, tempus non mollis ut, consectetur malesuada
          ligula. Mauris tempor sagittis nisi. Aliquam fringilla odio at tellus
          ultrices, sit amet facilisis orci malesuada. Integer eu ultricies
          nulla. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Quisque ultrices ipsum quis orci
          sollicitudin, at imperdiet leo maximus. Integer maximus lorem eu leo
          sodales eleifend. Suspendisse et tempus metus. Nam ac lectus vel risus
          posuere cursus. Nam porta arcu sed sem suscipit, quis eleifend sapien
          mollis. Proin venenatis iaculis tellus, quis semper nunc interdum eu.
          Curabitur egestas, lorem quis lacinia mollis, sem ante tincidunt
          metus, sit amet sagittis sapien urna sit amet erat. Donec sed lectus
          sit amet tortor posuere vestibulum consectetur imperdiet sem. Donec
          eget urna egestas, consequat velit quis, convallis urna. Aliquam non
          pulvinar purus, vitae congue justo. Quisque ultricies venenatis risus,
          non placerat ante semper et. Quisque sollicitudin, sapien ac ultricies
          cursus, dui mi fringilla arcu, ut ultrices magna diam ac justo.
          Vivamus commodo fermentum consectetur. In lorem odio, elementum non
          diam ut, imperdiet mattis velit. Aenean convallis fermentum lacus.
          Vestibulum vulputate eu tellus vitae imperdiet. Etiam finibus
          fermentum gravida. Nulla aliquet tortor eu commodo vestibulum. Etiam
          dapibus odio tortor, vel ultrices nisi pellentesque et. Aenean tempus
          urna nulla, at ultricies ex aliquet vitae. Proin ante neque,
          pellentesque quis nisi vel, ultricies vulputate urna. Cras eget
          finibus magna. Nulla lobortis enim turpis, non ullamcorper ligula
          ultricies non. Curabitur felis ex, tempus nec sapien quis, iaculis
          lobortis velit. Donec suscipit felis sit amet felis maximus tristique.
          In hendrerit mi vel justo luctus, in mattis risus vestibulum. Praesent
          porttitor, nisi eu porta auctor, orci leo hendrerit mauris, ac rutrum
          erat odio eu massa. Vestibulum quis mollis lorem, ac commodo ipsum. In
          at est dolor. Phasellus mattis mi leo, in ornare enim ornare a.
          Maecenas placerat vitae orci eu bibendum. Praesent auctor justo at
          lectus scelerisque blandit. Nullam sed lobortis metus. Aenean eu
          mauris ex. Praesent mattis tellus quis dolor ultricies, et porta urna
          dignissim. Vestibulum at ex sit amet justo malesuada gravida.
          Curabitur quis tempor odio. Suspendisse nec faucibus sem. Sed
          elementum placerat laoreet. Donec lacus justo, faucibus in urna at,
          sagittis egestas magna. Curabitur vel congue sem, eget commodo libero.
          Suspendisse vestibulum, nibh eget aliquam fermentum, ipsum lectus
          congue elit, feugiat rhoncus nulla metus et tortor. Morbi a felis
          sapien.
        </p>
        <p></p>
        <p id="lllo">
          {"                                              "}
          ddwedwedwe ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vitae purus id quam tempus tincidunt ac egestas nibh. Curabitur
          feugiat massa sed ante sollicitudin, a vestibulum risus viverra. Duis
          ut vestibulum lectus. Aliquam laoreet sagittis nulla, eu feugiat magna
          luctus quis. Maecenas interdum egestas purus, id sodales nunc
          tincidunt eget. Quisque blandit lacinia est egestas facilisis. Sed
          arcu nisi, consectetur rhoncus sapien et, venenatis laoreet arcu. In
          vel eros mauris. Nulla ut efficitur purus. Aenean neque sem, finibus
          vitae velit ut, rutrum imperdiet ligula. In sollicitudin elit a ex
          dictum, nec euismod dui ultrices. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Curabitur porta sed neque non ornare. Aliquam viverra gravida
          ex ut viverra. Mauris et volutpat erat, quis mollis elit. Nunc
          eleifend, metus ac eleifend suscipit, orci velit maximus augue, ac
          faucibus ipsum sem laoreet dolor. Cras iaculis quis risus eget
          laoreet. Mauris est purus, tempus non mollis ut, consectetur malesuada
          ligula. Mauris tempor sagittis nisi. Aliquam fringilla odio at tellus
          ultrices, sit amet facilisis orci malesuada. Integer eu ultricies
          nulla. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Quisque ultrices ipsum quis orci
          sollicitudin, at imperdiet leo maximus. Integer maximus lorem eu leo
          sodales eleifend. Suspendisse et tempus metus. Nam ac lectus vel risus
          posuere cursus. Nam porta arcu sed sem suscipit, quis eleifend sapien
          mollis. Proin venenatis iaculis tellus, quis semper nunc interdum eu.
          Curabitur egestas, lorem quis lacinia mollis, sem ante tincidunt
          metus, sit amet sagittis sapien urna sit amet erat. Donec sed lectus
          sit amet tortor posuere vestibulum consectetur imperdiet sem. Donec
          eget urna egestas, consequat velit quis, convallis urna. Aliquam non
          pulvinar purus, vitae congue justo. Quisque ultricies venenatis risus,
          non placerat ante semper et. Quisque sollicitudin, sapien ac ultricies
          cursus, dui mi fringilla arcu, ut ultrices magna diam ac justo.
          Vivamus commodo fermentum consectetur. In lorem odio, elementum non
          diam ut, imperdiet mattis velit. Aenean convallis fermentum lacus.
          Vestibulum vulputate eu tellus vitae imperdiet. Etiam finibus
          fermentum gravida. Nulla aliquet tortor eu commodo vestibulum. Etiam
          dapibus odio tortor, vel ultrices nisi pellentesque et. Aenean tempus
          urna nulla, at ultricies ex aliquet vitae. Proin ante neque,
          pellentesque quis nisi vel, ultricies vulputate urna. Cras eget
          finibus magna. Nulla lobortis enim turpis, non ullamcorper ligula
          ultricies non. Curabitur felis ex, tempus nec sapien quis, iaculis
          lobortis velit. Donec suscipit felis sit amet felis maximus tristique.
          In hendrerit mi vel justo luctus, in mattis risus vestibulum. Praesent
          porttitor, nisi eu porta auctor, orci leo hendrerit mauris, ac rutrum
          erat odio eu massa. Vestibulum quis mollis lorem, ac commodo ipsum. In
          at est dolor. Phasellus mattis mi leo, in ornare enim ornare a.
          Maecenas placerat vitae orci eu bibendum. Praesent auctor justo at
          lectus scelerisque blandit. Nullam sed lobortis metus. Aenean eu
          mauris ex. Praesent mattis tellus quis dolor ultricies, et porta urna
          dignissim. Vestibulum at ex sit amet justo malesuada gravida.
          Curabitur quis tempor odio. Suspendisse nec faucibus sem. Sed
          elementum placerat laoreet. Donec lacus justo, faucibus in urna at,
          sagittis egestas magna. Curabitur vel congue sem, eget commodo libero.
          Suspendisse vestibulum, nibh eget aliquam fermentum, ipsum lectus
          congue elit, feugiat rhoncus nulla metus et tortor. Morbi a felis
          sapien.
        </p>
      </div>
    </div>
  );
}

export default App;
