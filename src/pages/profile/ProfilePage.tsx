import { Controller } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select, SelectItem } from '@/components/ui/Select';
import { Typography } from '@/components/ui/Typography';

import { useProfilePage } from './hooks/useProfilePage';

import cls from './ProfilePage.module.css';
const ProfilePage = () => {
  const { form, state, functions } = useProfilePage();

  return (
    <div className={cls.profile_page}>
      <Typography variant='typography24_semibold'>Профиль </Typography>
      <form className={cls.update_profile_form} onSubmit={functions.onUpdateProfileData}>
        <Controller
          control={form.control}
          name='firstname'
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label='Имя'
              placeholder='Имя'
              required
              className={cls.select}
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message },
              })}
            />
          )}
        />
        <Controller
          control={form.control}
          name='lastname'
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label='Фамилия'
              placeholder='Фамилия'
              required
              className={cls.select}
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message },
              })}
            />
          )}
        />
        <Controller
          control={form.control}
          name='middlename'
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label='Отчество'
              placeholder='Отчество'
              className={cls.select}
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message },
              })}
            />
          )}
        />
        <Controller
          control={form.control}
          name='phone'
          disabled
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label='Номер'
              placeholder='Номер'
              disabled
              className={cls.select}
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message },
              })}
            />
          )}
        />
        <Controller
          control={form.control}
          name='email'
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label='Email'
              placeholder='Email'
              className={cls.select}
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message },
              })}
            />
          )}
        />
        <Controller
          control={form.control}
          name='city'
          render={({ field, fieldState }) => (
            <Select
              {...field}
              defaultValue={field.value}
              onValueChange={field.onChange}
              label='Город'
              className={cls.select}
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message },
              })}
            >
              {state.cities?.map((city) => (
                <SelectItem key={city.id} value={city.id}>
                  {city.name}
                </SelectItem>
              ))}
            </Select>
          )}
        />
        <Button loading={state.isLoading} type='submit' className={cls.update_button}>
          Обновить данные
        </Button>
      </form>
      {state.updateProfileError && (
        <Typography className={cls.error_message} variant='typography16_regular'>
          {state.updateProfileError}
        </Typography>
      )}
    </div>
  );
};

export default ProfilePage;
