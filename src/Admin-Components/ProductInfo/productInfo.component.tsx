import React, {useRef, useState} from 'react';
import Image from "next/image";
import styles from "./productInfo.module.scss"
import ModalComponent from "@/Admin-Components/Modal/modal.component";

const ProductInfoComponent = ({data, changeData}) => {
    const [isOpenModal1, setIsOpenModal1] = useState<boolean>(true)
    const addOptionItem = () => {

    }

    const CreateItemModal = () => {
        const formCreateItem = useRef(null)
        const close = () => {
            setIsOpenModal1(false)
        }

        const submitHandler = async (e) => {
            e.preventDefault()
            // @ts-ignore
            const formData = new FormData(formCreateItem.current)
            console.log(formData.values())
            // @ts-ignore
            formCreateItem.current.reset()
        }

        return (
            <ModalComponent closeHandler={close}>
                <form ref={formCreateItem} onSubmit={submitHandler}>
                    <div>
                        Заголовок опции:
                        <input type={"text"} name={"title"}/>
                    </div>
                    <div>
                        Цена опции:
                        <input type={"text"} name={"defaultPrice"}/>
                    </div>
                    <div>
                        Внешний вид:
                        <input type={"file"} name={"image"}></input>
                    </div>
                    <div>
                        Превью:
                        <input type={"file"} name={"preview"}></input>
                    </div>
                    <button type={"submit"}>Отправить</button>
                </form>
            </ModalComponent>
        )
    }

    const CategoryItemsList = ({catId}) => {
        return (
            <div >
                {data.optionCategories[catId].optionItems.map(item => {
                    return (
                        <div className={styles.itemcontainer}>
                            <div>Заголовок опции: {item.title}</div>
                            <div>Цена опции: {item.price}</div>
                            <Image width={80} height={80} src={process.env.NEXT_PUBLIC_DOMAIN + item.image} alt={"image"}/>
                            <Image width={80} height={80} src={process.env.NEXT_PUBLIC_DOMAIN + item.preview} alt={"prev"}/>
                        </div>
                    )
                })}
                <button onClick={addOptionItem} style={{margin: "5px 20px"}}>Добавить опцию</button>
            </div>
        )
    }

    const CategoriesList = (): JSX.Element => {
        return (
            <>
                {data.optionCategories.map((category, index) =>
                    <div className={styles.catcontainer}>
                        <div>
                            Название категории:
                            <input onChange={(e)=>changeData(e, "defaultPrice")} value={category.title}></input>
                        </div>
                        <CategoryItemsList catId={index}/>
                    </div>
                )}
            </>
        )
    }

    return (
        <div>
            <h3>Основные данные</h3>
            <div className={styles.mainproductdata}>
                <div className={styles.mainproductitem}>
                    Наименование:
                    <input onChange={(e)=>changeData(e, "title")} value={data.title}></input>
                </div>
                <div className={styles.mainproductitem}>
                    Артикул:
                    <input onChange={(e)=>changeData(e, "articul")} value={data.articul}></input>
                </div>
                <div className={styles.mainproductitem}>
                    Начальная цена:
                    <input onChange={(e)=>changeData(e, "defaultPrice")} value={data.defaultPrice}></input>
                </div>
                <div className={styles.mainproductitem}>
                    Описание:
                    <textarea onChange={(e)=>changeData(e, "description")} value={data.description}></textarea>
                </div>
            </div>
            <h3>Список  категорий:</h3>
            <div className={styles.mainproductdata}>
                <CategoriesList/>
            </div>


            <button>Сохранить</button>
            <button>Удалить</button>
             {isOpenModal1 && <CreateItemModal/>}
        </div>
    );
};

export default ProductInfoComponent;