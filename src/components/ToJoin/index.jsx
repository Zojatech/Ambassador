import Button from '@/components/Button';
import Ambassador from '../../assets/ambass.jpg';

const ToJoin = () => {
  return (
    <section className='ambass'>
      <h2>All you need to become an Ambassador</h2>

      <div className='details'>
        <div className='image'>
          <img src={Ambassador} />
        </div>

        <div className='need'>
          <h3>
            To become a Zojapay Ambassador, you need to be bold and creative.
            also these are needed:
          </h3>
          <ul>
            <li>Be passionate about financial education</li>
            <li>Be eager to learn effective commnication skills</li>
            <li>
              Be excited about creating innovation and showcasing creativity
            </li>
            <li>Be enthusiastic about teamwork and collaboration</li>
          </ul>
          <Button label='Become and Ambassador' />
        </div>
      </div>
    </section>
  );
};

export default ToJoin;
