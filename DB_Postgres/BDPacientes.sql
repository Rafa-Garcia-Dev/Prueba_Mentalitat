PGDMP         -    	            z         	   pacientes    14.6    14.6     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16394 	   pacientes    DATABASE     e   CREATE DATABASE pacientes WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE pacientes;
                postgres    false            ?            1259    16403 	   pacientes    TABLE       CREATE TABLE public.pacientes (
    id integer NOT NULL,
    tipodoc character varying(255) NOT NULL,
    documento character varying(255) NOT NULL,
    nombre character varying(255) NOT NULL,
    apellido character varying(255) NOT NULL,
    sexo character varying(255) NOT NULL
);
    DROP TABLE public.pacientes;
       public         heap    postgres    false            ?            1259    16402    pacientes_idpaciente_seq    SEQUENCE     ?   CREATE SEQUENCE public.pacientes_idpaciente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.pacientes_idpaciente_seq;
       public          postgres    false    210            ?           0    0    pacientes_idpaciente_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.pacientes_idpaciente_seq OWNED BY public.pacientes.id;
          public          postgres    false    209            \           2604    16406    pacientes id    DEFAULT     t   ALTER TABLE ONLY public.pacientes ALTER COLUMN id SET DEFAULT nextval('public.pacientes_idpaciente_seq'::regclass);
 ;   ALTER TABLE public.pacientes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            ?          0    16403 	   pacientes 
   TABLE DATA           S   COPY public.pacientes (id, tipodoc, documento, nombre, apellido, sexo) FROM stdin;
    public          postgres    false    210   y       ?           0    0    pacientes_idpaciente_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.pacientes_idpaciente_seq', 6, true);
          public          postgres    false    209            ^           2606    16410    pacientes pacientes_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.pacientes DROP CONSTRAINT pacientes_pkey;
       public            postgres    false    210            ?   q   x?3?tNM)?ITHIUH?,MILI??L?444070?427?JLKL??tO,JJ?&'??d??s?p:^????Z?^sc3N??ҢDN?????Ԣ?bN????<??=... ??']     