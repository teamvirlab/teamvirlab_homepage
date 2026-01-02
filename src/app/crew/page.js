"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const GENERATION = {
  title: "1기 · 아스트라",
  members: [
    {
      id: "yumekawa-akira",
      name: "유메카와 아키라",
      image: "/crew/유메카와 아키라 프로필.png",
      bioImage: "/crew/유메카와 아키라 자기소개서.png",
    },
    {
      id: "bct",
      name: "고장난고양이장난감",
      image: "/crew/고장난고양이장난감 프로필.png",
      bioImage: "/crew/고장난고양이장난감 자기소개서.png",
    },
  ],
};

export default function CrewPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (member) => {
    setSelected(member);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  // ESC로 닫기 + 열렸을 때 배경 스크롤 잠금
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <section className="crew1">
      <h1 className="crew1_title">{GENERATION.title}</h1>

      <div className="crew1_row" role="list" aria-label="Team Virlab 크루 멤버">
        {GENERATION.members.map((m) => (
          <button
            key={m.id}
            type="button"
            className="crew1_member"
            onClick={() => openModal(m)}
            aria-label={`${m.name} 프로필 열기`}
          >
            <div className="crew1_image">
              <Image
                src={m.image}
                alt={`${m.name} 이미지`}
                width={220}
                height={260}
                priority
                style={{ height: "auto" }}
              />
            </div>
            <div className="crew1_name">{m.name}</div>
          </button>
        ))}
      </div>

      {/* 모달 */}
      {open && selected && (
        <div
          className="virlab_modal_overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} 프로필`}
          onClick={closeModal}
        >
          <div
            className="virlab_modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="virlab_modal_head">
              <div className="virlab_modal_title">{selected.name}</div>
              <button
                type="button"
                className="virlab_modal_close"
                onClick={closeModal}
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <div className="virlab_modal_body">
              {/* 왼쪽: 캐릭터 */}
              <div className="virlab_modal_left">
                <div className="virlab_modal_avatar">
                  <Image
                    src={selected.image}
                    alt={`${selected.name} 캐릭터`}
                    width={240}
                    height={280}
                    style={{ height: "auto" }}
                  />
                </div>
              </div>

              {/* 오른쪽: 자기소개서 이미지 */}
              <div className="virlab_modal_right">
                {selected.bioImage ? (
                  <div className="virlab_modal_bio">
                    <Image
                      src={selected.bioImage}
                      alt={`${selected.name} 자기소개서`}
                      width={900}
                      height={1200}
                      sizes="(max-width: 900px) 92vw, 540px"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                ) : (
                  <div className="virlab_modal_empty">
                    자기소개서 이미지가 아직 준비되지 않았습니다.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
