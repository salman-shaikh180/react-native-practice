import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {ChangeEvent, useState} from 'react';
import CustomTextField from '../components/CustomTextField/CustomTextField';
import CustomSelect from '../components/CustomSelect/CustomSelect';
import Search from '../assets/Search';
import InputBadge from '../components/InputBadge/InputBadge';
import {useFormik} from 'formik';
import {RecipeSchema, RecipeValues} from '../formik/Recipe';
import ImagePicker from 'react-native-image-crop-picker';
import CustomDropDown from '../components/CustomDropDown/CustomDropDown';
import CustomButton from '../components/CustomButton/CustomButton';
import Ingredients from '../components/Ingredients/Ingredients';
import MediaPicker from '../components/MediaPicker/MediaPicker';
import RoutePreventModal from '../components/RoutePreventModal/RoutePreventModal';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import Calender from '../assets/Calender';
import Error from '../components/Error/Error';
const AddRecipe = ({navigation}: any) => {
  const [showRoutePreventModal, setShowRoutePreventModal] = useState(false);
  const [pendingRoute, setPendingRoute] = useState<any>(null);
  const [ingredient, setIngredient] = useState<string>('');
  const [date, setDate] = useState('');
  const formik = useFormik({
    initialValues: RecipeValues,
    validationSchema: RecipeSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  const handleFoodType = (value: string) => {
    formik.setFieldValue('foodType', value);
  };
  const handleIngredientChange = (e: string | ChangeEvent<any>): void => {
    setIngredient(e.toString());
  };
  const handleAddIngredients = () => {
    if (ingredient.trim() === '') {
      return;
    }
    formik.setFieldValue('ingredients', [
      ...formik.values.ingredients,
      ingredient,
    ]);
    setIngredient('');
  };

  const handleRemoveIngredient = (value: string) => {
    formik.setFieldValue(
      'ingredients',
      formik.values.ingredients.filter(item => item !== value),
    );
  };

  const handleOneCanHaveIt = (value: string) => {
    if (formik.values.oneCanHaveIt.includes(value)) {
      const filteredData = formik.values.oneCanHaveIt.filter(
        (text: string) => text.toLowerCase() !== value.toLowerCase(),
      );
      formik.setFieldValue('oneCanHaveIt', filteredData);
    } else {
      formik.setFieldValue('oneCanHaveIt', [
        ...formik.values.oneCanHaveIt,
        value,
      ]);
    }
  };

  const handleThumbnail = async () => {
    const image = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });
    formik.setFieldValue('thumbnail', image.path);
  };
  const handleVideo = async () => {
    const video = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      mediaType: 'video',
    });
    formik.setFieldValue('video', video.path);
  };
  const handleCategoryChange = (value: string) => {
    formik.setFieldValue('category', value);
  };
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e: any) => {
        if (!formik.dirty) {
          return;
        }

        e.preventDefault();
        setPendingRoute(e.data.action);
        setShowRoutePreventModal(true);
      }),
    [navigation, formik.dirty],
  );
  const handleDiscardChanges = () => {
    setShowRoutePreventModal(false);
    navigation.dispatch(pendingRoute);
  };

  const handleCloseModal = () => {
    setShowRoutePreventModal(false);
    setPendingRoute(null);
  };
  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      setDate(formattedDate);
      formik.setFieldValue('date', formattedDate);
    }
  };

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date ? new Date(date) : new Date(),
      onChange: handleDateChange,
      mode: 'time',
      is24Hour: true,
    });
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="height">
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <MediaPicker
            media={formik.values.thumbnail}
            mediaType="image"
            onPickMedia={handleThumbnail}
            error={
              formik.errors.thumbnail &&
              formik.touched.thumbnail &&
              formik.errors.thumbnail
            }
          />
          <MediaPicker
            media={formik.values.video}
            mediaType="video"
            onPickMedia={handleVideo}
            error={
              formik.errors.video && formik.touched.video && formik.errors.video
            }
          />
          <CustomTextField
            label="Recipe name"
            placeHolder="Recipe title"
            value={formik.values.name}
            handleChange={formik.handleChange('name')}
            handleBlur={formik.handleBlur('name')}
            error={formik.errors.name!}
            isError={formik.errors.name && formik.touched.name ? true : false}
          />
          <CustomSelect
            options={['Pure Veg', 'Non Veg']}
            label="Food type"
            value={formik.values.foodType}
            handleChange={handleFoodType}
            error={formik.errors.foodType!}
            isError={
              formik.errors.foodType && formik.touched.foodType ? true : false
            }
          />
          <CustomSelect
            options={['Breakfast', 'Lunch', 'Dinner']}
            label="One can have that in"
            value={formik.values.oneCanHaveIt}
            handleChange={handleOneCanHaveIt}
            error={formik.errors.oneCanHaveIt!}
            isError={
              formik.errors.oneCanHaveIt && formik.touched.oneCanHaveIt
                ? true
                : false
            }
          />
          <CustomDropDown
            title="Category"
            placeHolder="Category"
            options={['AAA', 'BBB', 'CCC']}
            selectedValue={formik.values.category}
            onValueChange={handleCategoryChange}
            error={formik.errors.category!}
            isError={
              formik.errors.category && formik.touched.category ? true : false
            }
          />
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Date</Text>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#D8DADC',
                paddingVertical: 5,
                paddingHorizontal: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TextInput
                style={styles.text}
                placeholder="YYYY-MM-DD"
                placeholderTextColor={'#838383'}
                value={date}
                editable={false}
              />
              <TouchableOpacity onPress={showDatePicker}>
                <Calender />
              </TouchableOpacity>
            </View>
          </View>
          <CustomTextField
            label="Add Ingredients"
            placeHolder="Search ingredients"
            value={ingredient}
            icon={<Search />}
            handleChange={handleIngredientChange}
            handleBlur={formik.handleBlur('ingredients')}
            onKeyDown={handleAddIngredients}
            error={formik.errors.ingredients!}
            isError={
              formik.errors.ingredients && formik.touched.ingredients
                ? true
                : false
            }
          />
          {formik.values.ingredients.length > 0 && (
            <Ingredients
              data={formik.values.ingredients}
              onPress={handleRemoveIngredient}
            />
          )}
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Time to cook</Text>
            <View style={{flexDirection: 'row', gap: 17}}>
              <View style={{flex: 1}}>
                <InputBadge
                  placeholder="00"
                  label="Hours"
                  keyboardType="numeric"
                  value={formik.values.hours}
                  handleChange={formik.handleChange('hours')}
                  handleBlur={formik.handleBlur('hours')}
                />
              </View>
              <View style={{flex: 1}}>
                <InputBadge
                  placeholder="00"
                  label="Min"
                  keyboardType="numeric"
                  value={formik.values.mins}
                  handleChange={formik.handleChange('mins')}
                  handleBlur={formik.handleBlur('mins')}
                />
              </View>
            </View>
            <Error
              isFirstError={formik.errors.hours && formik.touched.hours}
              isSecondError={formik.errors.mins && formik.touched.mins}
              firstError={formik.errors.hours}
              secondError={formik.errors.mins!}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Nutritions</Text>
            <View style={styles.inputBadgeContainer}>
              <InputBadge
                placeholder="Calories"
                label="Kcal"
                keyboardType="numeric"
                value={formik.values.calories}
                handleChange={formik.handleChange('calories')}
                handleBlur={formik.handleBlur('calories')}
              />
              <InputBadge
                placeholder="Protein"
                label="Grm"
                keyboardType="numeric"
                value={formik.values.protein}
                handleChange={formik.handleChange('protein')}
                handleBlur={formik.handleBlur('protein')}
              />
            </View>
            <Error
              isFirstError={formik.errors.calories && formik.touched.calories}
              isSecondError={formik.errors.protein && formik.touched.protein}
              firstError={formik.errors.calories!}
              secondError={formik.errors.protein!}
            />
            <View style={styles.inputBadgeContainer}>
              <InputBadge
                placeholder="Carbs"
                label="Grm"
                keyboardType="numeric"
                value={formik.values.carbs}
                handleChange={formik.handleChange('carbs')}
                handleBlur={formik.handleBlur('carbs')}
              />
              <InputBadge
                placeholder="Fat"
                label="Grm"
                keyboardType="numeric"
                value={formik.values.fats}
                handleChange={formik.handleChange('fats')}
                handleBlur={formik.handleBlur('fats')}
              />
            </View>
            <Error
              isFirstError={formik.errors.carbs && formik.touched.carbs}
              isSecondError={formik.errors.fats && formik.touched.fats}
              firstError={formik.errors.carbs!}
              secondError={formik.errors.fats!}
            />
          </View>
        </View>
      </ScrollView>
      <CustomButton onPress={formik.handleSubmit} />
      {showRoutePreventModal && (
        <RoutePreventModal
          onDiscard={handleDiscardChanges}
          onCancel={handleCloseModal}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default AddRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 20,
    gap: 24,
  },
  inputContainer: {
    flex: 1,
    gap: 11,
  },
  text: {
    color: '#18270B',
    fontSize: 16,
    fontWeight: '500',
  },
  inputBadgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    gap: 17,
    alignItems: 'center',
  },
});
