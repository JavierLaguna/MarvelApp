import React from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, Text, Image, View, ScrollView} from 'react-native';
import styles from './styles';
import {selectHero} from '../../../redux/heroes/selectors';
import {Accordion} from '../../atoms';

export default function HeroDetail(props) {
  const hero = useSelector(selectHero);

  const renderAccordionSection = (section, title) => {
    if (!section || section.available === 0) {
      return null;
    }

    return (
      <Accordion
        style={styles.accordion}
        renderHeader={() => (
          <Text style={styles.title}>{`${title}: ${section.available}`}</Text>
        )}>
        <>
          {section.items.map((item) => (
            <Text style={styles.itemText} key={item.name}>
              - {item.name}
            </Text>
          ))}
        </>
      </Accordion>
    );
  };

  const imageSrc = {uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`};
  const {description, comics, series, stories, events} = hero;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={imageSrc} style={styles.image} />
        <View style={styles.infoContainer}>
          {description !== '' && (
            <>
              <Text style={styles.title}>Description</Text>
              <Text style={styles.description}>{description}</Text>
            </>
          )}

          {renderAccordionSection(comics, 'Comics')}

          {renderAccordionSection(series, 'Series')}

          {renderAccordionSection(stories, 'Stories')}

          {renderAccordionSection(events, 'Events')}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
