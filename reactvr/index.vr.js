import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  VrButton,
  Image,
  Text,
  AmbientLight,
  View,
} from 'react-vr';
import Tooltip from './Tooltip.js'
import InfoButton from './InfoButton.js'

import Planet from './planet';


function getData() {
  return {
    "data": {
      "__type": {
        "name": "Root",
        "fields": [
          {
            "name": "allFilms",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "FilmsConnection",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "film",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "Film",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "allPeople",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "PeopleConnection",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "person",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "Person",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "allPlanets",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "PlanetsConnection",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "planet",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "Planet",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "allSpecies",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "SpeciesConnection",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "species",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "Species",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "allStarships",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "StarshipsConnection",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "starship",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "Starship",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "allVehicles",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "VehiclesConnection",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "vehicle",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "Vehicle",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "node",
            "description": "Fetches an object given its ID",
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "Node",
              "kind": "INTERFACE",
              "ofType": null
            }
          }
        ]
      }
    }
  };
}
function getFilmsData() {
  return {
    "data": {
      "__type": {
        "name": "Film",
        "fields": [
          {
            "name": "hackImage",
            "description": "https://maxcdn.icons8.com/Share/icon/Logos//star_wars1600.png",
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "title",
            "description": "The title of this film.",
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "episodeID",
            "description": "The episode number of this film.",
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "Int",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "openingCrawl",
            "description": "The opening paragraphs at the beginning of this film.",
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "director",
            "description": "The name of the director of this film.",
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "producers",
            "description": "The name(s) of the producer(s) of this film.",
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": null,
              "kind": "LIST",
              "ofType": {
                "name": "String",
                "kind": "SCALAR"
              }
            }
          },
          {
            "name": "releaseDate",
            "description": "The ISO 8601 date format of film release at original creator country.",
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "speciesConnection",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "FilmSpeciesConnection",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "starshipConnection",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "FilmStarshipsConnection",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "vehicleConnection",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "FilmVehiclesConnection",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "characterConnection",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "FilmCharactersConnection",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "planetConnection",
            "description": null,
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "FilmPlanetsConnection",
              "kind": "OBJECT",
              "ofType": null
            }
          },
          {
            "name": "created",
            "description": "The ISO 8601 date format of the time that this resource was created.",
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "edited",
            "description": "The ISO 8601 date format of the time that this resource was edited.",
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": "String",
              "kind": "SCALAR",
              "ofType": null
            }
          },
          {
            "name": "id",
            "description": "The ID of an object",
            "isDeprecated": false,
            "deprecationReason": null,
            "type": {
              "name": null,
              "kind": "NON_NULL",
              "ofType": {
                "name": "ID",
                "kind": "SCALAR"
              }
            }
          }
        ]
      }
    }
  }
}
const tt = [{
  "text": "This type represents a planet from \nthe Star Wars Galaxies. Planets which have been annihilated \nare denoted with an asterisk.",
  "title": "Planets!",
  "position": [
    0,
    0
  ],
  "linkedPhotoId": "112379"
},
{
  "text": "Each member of this type is a person in \nthe Star Wars Galaxy. Since most people in the \nStar Wars Galaxy are related, the computational burden \nof rendering relationship lines is too great.  ",
    "title": "People!",
    "position": [
      0,
      0
    ],
    "linkedPhotoId": "112379"
  },
{
  "text": "The modern space citizen can't make \nit very far without a space ship!  This type describes \nthe different members of the fleet.",
  "title": "Space ships!",
  "position": [
    0,
    0
  ],
  "linkedPhotoId": "112379"
},
  {
    "text": "Mankind demonstrates his superiority over the animal \nkingdom throughout the galaxy.",
    "title": "Beasts!",
    "position": [
      0,
      0
    ],
    "linkedPhotoId": "112379"
  }
]
class Nodes extends React.Component {
  render() {
    return (
      <View>
        {this.props.nodes.map((item, i) =>
          <VrButton
            key={`${item.name}_vrbutton`}
            style={{
              layoutOrigin: [0.5, 0.5, 0],
              position: 'absolute',
              width: 1,
              height: 1,
              transform: [{ rotateY: i * (360 / this.props.nodes.length) },
              { translate: [0, 0, -5] }]
            }}
            onClick={() => this.props.onClick(item.name)}
          >
            <InfoButton
              key={`${item.name}_info`}
              rotateY={i * (360 / this.props.nodes.length)}
              source={asset('info_icon.png')}
              tooltip={tt[Math.floor(Math.random()*4)]}
              translateZ={-5}
            />
            <Planet 
              key={`${item.name}_planet`}
             />
          </VrButton>
        )}
        <AmbientLight intensity={ 2.6 }  />
      </View>
    );
  }
}
const nodes = [{ name: 'foo', nodes: [{ name: 'childFoo' }, { name: 'childBar' }, { name: 'childBaz' }] }, { name: 'bar' }, { name: 'baz' }, { name: 'test' }, { name: 'root' }];
class reactvr extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nodes: [] };
  }
  getType() {
    client.query(`
    {
      allFilms {
        films {
          title
        }
      }
    }
`).then(result => {
        console.log(result.allFilms);
      });
  }
  componentDidMount() {
    this.setState({ nodes: getData().data.__type.fields });
  }
  onClick = (name) => {
    const root = this.state.nodes.find((el) => { return el.name === name });
    let newNodes = [];
    newNodes.push(root);
    newNodes = newNodes.concat(getFilmsData().data.__type.fields);
    this.setState({ nodes: newNodes });
  }
  render() {
    return (
      <View>
        <Pano source={asset('eso0932a.jpg')} />
        <Nodes onClick={this.onClick} nodes={this.state.nodes} />
      </View>
    );
  }
}

AppRegistry.registerComponent('reactvr', () => reactvr);
